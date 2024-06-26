import { type Ref, type ShallowRef, computed, readonly, ref, shallowRef } from 'vue'
import Map from 'ol/Map'
import View from 'ol/View'
import type { Coordinate } from 'ol/coordinate'
import { createEventHook } from '@vueuse/shared'
import type { MapBrowserEvent } from 'ol'
import type { Extent } from 'ol/extent'
import BaseLayer from 'ol/layer/Base'

// global state, created in module scope
const map: ShallowRef<Map> = shallowRef(new Map({ view: new View({ center: [0, 0], zoom: 1 }) }))
const layers: Ref<BaseLayer[]> = ref([])
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

const syncMapProperties = () => {
  center.value = view?.getCenter()
  resolution.value = view?.getResolution()
  zoom.value = view?.getZoom()
  extent.value = view?.calculateExtent()
}

// TODO: when view is changed externally, the listeners are gone
view.on(['change', 'change:center', 'change:resolution'], () => {
  syncMapProperties()
})
map.value.on('change:size', () => {
  syncMapProperties()
})

syncMapProperties()

/**
 * A hook that returns an object with various properties and functions related to the OpenLayers map.
 * @returns The object
 */
export function useOl() {
  return {
    /** Hook executed on map click */
    onMapClick,
    /** Hook executed on single map click */
    onMapSingleClick,
    /** The OpenLayers map instance */
    map: computed(() => map.value),
    /** The layers registered on the map */
    layers: computed(() => layers.value),
    /** The center of the map */
    center: readonly(center),
    /** The extent of the map */
    extent: readonly(extent),
    /** If map is currently loading */
    mapLoading: readonly(mapLoading),
    /** If map is currently moving */
    mapMoving: readonly(mapMoving),
    /** The zoom of the map */
    zoom: readonly(zoom),
    /** The rounded zoom of the map */
    zoomRounded,
    /** The coordinate of the pointer (mouse cursor) */
    pointerCoordinate: readonly(pointerCoordinate),
    /** The pixel of the point (mouse cursor) */
    pointerPixel: readonly(pointerPixel)
  }
}
