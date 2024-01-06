# vue-ol-comp [![Lint](https://github.com/JakobMiksch/vue-ol-comp/actions/workflows/lint.yml/badge.svg)](https://github.com/JakobMiksch/vue-ol-comp/actions/workflows/lint.yml)  <!-- markdown-link-check-disable-line --> 

A [Vue.js](https://vuejs.org/) [composable](https://vuejs.org/guide/reusability/composables) and a [component](https://vuejs.org/guide/essentials/component-basics.html) for an [OpenLayers](https://openlayers.org/) map. It makes map-related properties and events globally accessible, while still giving the developer full control over the OpenLayers API.

It assumes the application uses a single map instance with a single map view associated with it, as this is the setup that most OpenLayers based mapping applications have.

## Development

```shell
# install dependencies
npm install

# run the development application
npm run dev

# the application will be accessible at http://localhost:5173/
```

## Usage in Applications

```shell
# clone repo
git clone github.com/JakobMiksch/vue-ol-comp

# enter your applicaton
cd /PATH/TO/YOUR/APP

# TODO
npm i ../PATH/TO/VUE-OL_COMPOSABLE
```

Initialize or edit the map in any component, for example in `App.vue`:

```vue
<script setup lang="ts">
import { fromLonLat } from 'ol/proj'
import { onMounted } from 'vue'
import { useOl, OlMap } from 'vue-ol-comp'
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
  <OlMap :style="{ width: '500px', height: '100px' }"></OlMap>
</template>
```

## Alternatives ways to use OpenLayers in Vue

- **directly** without any additional library. This is done in the application template [Wegue](https://github.com/wegue-oss/wegue/) or described in this [blog post](https://spatial-dev.guru/2022/02/20/integrating-openlayers-map-with-vuejs-create-map-part-1/)
- using a **component library** like [vue3-openlayers](https://github.com/MelihAltintas/vue3-openlayers) (for Vue 3) or [vuelayers](https://github.com/ghettovoice/vuelayers) (for Vue 2) that let's one configure the map via the `<template>` section

## TODO

- [ ] make `peerDependency` versions as big as possible
- [ ] publish to npm and adapt README accordingly
- [ ] Describe how to add custom composable based the the basic one
- [ ] Add basic tests using vitest
- [ ] built demo app as well as npm package using separate config files
- extra:
  - [ ] test with different environments, both node and peer dependency versions
  - [ ] commit lint
  - [ ] stack blitz
  - [ ] <https://keepachangelog.com/en/1.1.0/>
