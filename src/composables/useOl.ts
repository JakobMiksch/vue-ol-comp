import { computed, readonly, ref, shallowRef, type Ref, type ShallowRef } from 'vue'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import type { Coordinate } from 'ol/coordinate'
import { createEventHook } from '@vueuse/shared'
import type { MapBrowserEvent } from 'ol'
import type { Extent } from 'ol/extent'
import BaseLayer from 'ol/layer/Base'

// global state, created in module scope
const map: ShallowRef<Map> = shallowRef(new Map({ view: new View({ center: [0, 0], zoom: 1 }) }))
const layers: Ref<Array<BaseLayer>> = ref([])
const center: Ref<Coordinate | undefined> = ref()
const extent: Ref<Extent | undefined> = ref()
const resolution: Ref<number | undefined> = ref()
const zoom: Ref<number | undefined> = ref()
const pointerCoordinate: Ref<Coordinate> = ref([])
const pointerPixel: Ref<Coordinate> = ref([])
const mapLoading = ref(false)
const mapMoving = ref(false)
const zoomRounded = computed(() => (zoom.value ? Math.round(zoom.value) : undefined))

const { on: onMapClick, trigger: triggerMapClick } =
  createEventHook<MapBrowserEvent<PointerEvent>>()
const { on: onMapSingleClick, trigger: triggerMapSingleClick } =
  createEventHook<MapBrowserEvent<PointerEvent>>()

map.value.getLayers().on('change:length', (event) => {
  layers.value = event.target.getArray()
})

// TODO: remove listener on unmount

map.value.on('click', triggerMapClick)
map.value.on('singleclick', triggerMapSingleClick)
map.value.on('pointermove', (event) => {
  pointerCoordinate.value = event.coordinate
  pointerPixel.value = event.pixel
})

map.value.on('loadstart', () => {
  mapLoading.value = true
})
map.value.on('loadend', () => {
  mapLoading.value = false
})
map.value.on('movestart', () => {
  mapMoving.value = true
})
map.value.on('moveend', () => {
  mapMoving.value = false
})

const view = map.value.getView()
const syncView = (view: View) => {
  center.value = view?.getCenter()
  resolution.value = view?.getResolution()
  zoom.value = view?.getZoom()
  extent.value = view?.calculateExtent()
}
view.on(['change', 'change:center', 'change:resolution'], () => {
  syncView(view)
})
syncView(view)

export function useOl() {
  return {
    onMapClick,
    onMapSingleClick,
    // NOTE: readonly does not work on map, but computed does to prevent it is re-written
    map: computed(() => map.value),
    layers: readonly(layers),
    center: readonly(center),
    extent: readonly(extent),
    mapLoading: readonly(mapLoading),
    mapMoving: readonly(mapMoving),
    zoom: readonly(zoom),
    zoomRounded,
    pointerCoordinate: readonly(pointerCoordinate),
    pointerPixel: readonly(pointerPixel)
  }
}
