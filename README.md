# vue-ol-comp 

[![NPM Version](https://badgen.net/npm/v/vue-ol-comp)](https://www.npmjs.com/package/vue-ol-comp) <!-- markdown-link-check-disable-line -->
[![Lint](https://github.com/JakobMiksch/vue-ol-comp/actions/workflows/lint.yml/badge.svg)](https://github.com/JakobMiksch/vue-ol-comp/actions/workflows/lint.yml) <!-- markdown-link-check-disable-line -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <!-- markdown-link-check-disable-line -->
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/JakobMiksch/vue-ol-comp) <!-- markdown-link-check-disable-line -->

This [composable](https://vuejs.org/guide/reusability/composables) exposes reactive variables to make the state of an [OpenLayers](https://openlayers.org/) map available across different Vue components. It provides easy access to commonly used variables such as `map`, `layers`, `center`, `extent`, `zoom`, `pointerCoordinate`, `pointerPixel`, and more. See [src/composables/useOl.ts](src/composables/useOl.ts) for implementation details.

Demo application: <https://jakobmiksch.github.io/vue-ol-comp/>

## Usage

```shell
# install
npm install vue-ol-comp
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
  <OlMap :style="{ width: '500px', height: '100px' }"/>
</template>
```

Make sure `ol/ol.css` is imported in your CSS.

## Development

The development is done using a demo app, where all features can directly be tested.

```shell
# install dependencies
npm install

# run the development application
npm run dev
```

The application will be accessible at <http://localhost:5173/> <!-- markdown-link-check-disable-line -->

## Alternative ways to use OpenLayers in Vue

- **directly** without any additional library. This is done in the application template [Wegue](https://github.com/wegue-oss/wegue/) or described in this [blog post](https://spatial-dev.guru/2022/02/20/integrating-openlayers-map-with-vuejs-create-map-part-1/)
- using a **component library** like [vue3-openlayers](https://github.com/MelihAltintas/vue3-openlayers) (for Vue 3) or [vuelayers](https://github.com/ghettovoice/vuelayers) (for Vue 2) that let's one configure the map via the `<template>` section
