import { onMounted, ref, type Ref, type ShallowRef } from 'vue'
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';


// global state, created in module scope
const olMap: ShallowRef<Map | undefined> = ref()
const layers = ref()

export function useMap() {

    const initMap = (target: string) => {
        console.log('INIT MAP')
        // TODO: handle case map already exists

        // create map if it does not exist yet
        olMap.value = new Map({
            target: target,
            view: new View({
              center: [0, 0],
              zoom: 2,
            }),
          });

          olMap.value.getLayers().on('change:length', (event)=>{
            console.log(event)
            console.log(event.target.getArray())

            layers.value = event.target.getArray()
          })


          olMap.value.addLayer(new TileLayer({
            source: new OSM(),
          }),)



    }

    // onMounted(() => {
    // })

  return {
    initMap,
    olMap,
    layers,
  }
}