import { computed, readonly, ref, type Ref, type ShallowRef } from 'vue'
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import type { Coordinate } from 'ol/coordinate';

// global state, created in module scope
const map: ShallowRef<Map | undefined> = ref()
const ready = ref(false)
const layers = ref()
const center: Ref<Coordinate | undefined> = ref()
const resolution: Ref<number | undefined> = ref()
const zoom: Ref<number | undefined> = ref()
const zoomRounded = computed(() => {
  if (zoom.value) {
    return Math.round(zoom.value)
  } else {
    return undefined
  }
})

const increaseZoom = () => {
  const view = map.value?.getView()
  if (view) {
    view.setZoom(view.getZoom() + 1)
  }
}
const decreaseZoom = () => {
  const view = map.value?.getView()
  if (view) {
    view.setZoom(view.getZoom() - 1)
  }
}

// create multiple instances as described here
// https://stackoverflow.com/questions/73897102/vue-composable-how-to-use-multiple-instances-of-composable-without-sharing-sta

export function useOl() {

  const syncView = (view: View) => {
    center.value = view.getCenter()
    resolution.value = view.getResolution()
    zoom.value = view.getZoom()
  }

  const init = (target: string | HTMLElement, definedView: View) => {

    // create map if it does not exist yet
    map.value = new Map({
      target: target,
      view: definedView
    });

    const view = map.value.getView()
    syncView(view)
    ready.value = true

    map.value.getLayers().on('change:length', (event) => {
      layers.value = event.target.getArray()
    })

    map.value.addLayer(new TileLayer({
      source: new OSM(),
    }))

    view.on(['change', 'change:center', 'change:resolution'], () => {
      syncView(view)
    })

  }


  return {
    init,
    increaseZoom,
    decreaseZoom,
    map,
    layers: readonly(layers),
    center: readonly(center),
    zoom: readonly(zoom),
    zoomRounded,
    ready: readonly(ready),
  }
}