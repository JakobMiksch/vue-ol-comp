import Map from 'ol/Map.js';
import { ref, type Ref } from 'vue';


const maps: Ref<Record<string, Map>> = ref()

export function useMapById(mapId: string) {

    const map = maps[mapId]

    return {
        map
    }
}