# vue-ol-composable

A Vue 3 composable for an OpenLayers map. It makes map-related properties and events globally accessible in the application, while still giving the developer full control over the OpenLayers API.

It assumes that the application uses a single map instance with a single map view associated with it, as this is the setup that most OpenLayers based mapping applications have.


## Usage

```shell
# install
npm i vue-ol-composable
```

Initialize or edit the map in any component, for example in `App.vue`:

```vue
<script setup lang="ts">
import { fromLonLat } from 'ol/proj'
import { onMounted } from 'vue'
import { useOl } from './composables/useOl'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

const { map } = useOl()

onMounted(() => {
  map.value.addLayer(
    new TileLayer({
      source: new OSM()
    })
  )

  map.value.getView().setCenter(fromLonLat([11, 47]))
  map.value.getView().setZoom(15)
})
</script>
```

The map can be added to any component like this:

```vue
<template>
  <olMap :style="{ width: '500px', height: '100px' }"></olMap>
</template>
```

## Alternatives ways to use OpenLayers in Vue

- **directly** without any additional library. This is done in the application template [Wegue](https://github.com/wegue-oss/wegue/) or described in this [blog post](https://spatial-dev.guru/2022/02/20/integrating-openlayers-map-with-vuejs-create-map-part-1/)
- using a **component library** like [vue3-openlayers](https://github.com/MelihAltintas/vue3-openlayers)(for Vue 3) or [vuelayers](https://github.com/ghettovoice/vuelayers) - (for Vue 2) that let's one configure the map via the `<template>` section

## Development

```shell
# install dependencies
npm install

# run the development application
npm run dev

# the application will be accessible at http://localhost:5173/
```
