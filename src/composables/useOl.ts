import { computed, readonly, ref, shallowRef, type Ref, type ShallowRef } from 'vue'
import Map from 'ol/Map.js'
import OSM from 'ol/source/OSM.js'
import TileLayer from 'ol/layer/Tile.js'
import View from 'ol/View.js'
import type { Coordinate } from 'ol/coordinate'
import { createEventHook } from '@vueuse/shared'
import type { MapBrowserEvent } from 'ol'
import type { Extent } from 'ol/extent'

// global state, created in module scope
const map: ShallowRef<Map> = shallowRef(new Map())
const ready = ref(false)
const layers = ref()
const center: Ref<Coordinate | undefined> = ref()
const extent: Ref<Extent | undefined> = ref()
const resolution: Ref<number | undefined> = ref()
const zoom: Ref<number | undefined> = ref()
const pointerCoordinate: Ref<Coordinate> = ref([])
const pointerPixel: Ref<Coordinate> = ref([])
const mapLoading = ref(false)
const mapMoving = ref(false)
const zoomRounded = computed(() => {
  if (zoom.value) {
    return Math.round(zoom.value)
  } else {
    return undefined
  }
})

const { on: onMapClick, trigger: triggerMapClick } = createEventHook<MapBrowserEvent<any>>()
const { on: onMapSingleClick, trigger: triggerMapSingleClick } = createEventHook<MapBrowserEvent<any>>()

const syncView = (view: View) => {
  center.value = view?.getCenter()
  resolution.value = view?.getResolution()
  zoom.value = view?.getZoom()
  extent.value = view?.calculateExtent()
}

map.value.getLayers().on('change:length', (event) => {
  layers.value = event.target.getArray()
})

map.value.addLayer(
  new TileLayer({
    source: new OSM()
  })
)

// TODO: remove listener on unmount

map.value.on('click', triggerMapClick)
map.value.on('singleclick', triggerMapSingleClick)
map.value.on('pointermove', (event)=>{
  pointerCoordinate.value = event.coordinate
  pointerPixel.value = event.pixel
})

map.value.on('loadstart', () => {
  mapLoading.value = true
})
map.value.on('loadend', (event) => {
  mapLoading.value = false
  console.log(event)

})
map.value.on('movestart', () => {
  mapMoving.value = true
})
map.value.on('moveend', () => {
  mapMoving.value = false
})


export function useOl() {

  const init = ( definedView: View) => {
    if (ready.value) return
    map.value.setView(definedView)
    const view = map.value.getView()
    view.on(['change', 'change:center', 'change:resolution'], () => {
      syncView(view)
    })
    syncView(view)
    ready.value = true
  }

  return {
    init,
    onMapClick,
    onMapSingleClick,
    map,
    layers: readonly(layers),
    center: readonly(center),
    extent: readonly(extent),
    mapLoading: readonly(mapLoading),
    mapMoving: readonly(mapMoving),
    zoom: readonly(zoom),
    zoomRounded,
    ready: readonly(ready),
    pointerCoordinate: readonly(pointerCoordinate),
    pointerPixel: readonly(pointerPixel),
  }
}
