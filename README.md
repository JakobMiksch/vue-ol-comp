# vue-ol-composable

A Vue3 composable wrapping a OpenLayers map.

## Usage

```shell
# install
npm i vue-ol-composable
```

TODO: Add Quickstart

## API Docs

TODO

## Assumptions

- the application uses only one map instance. And the map instance has only one instance connected it. While in theory, with OpenLayers you can have multiple map and view instances in the same application, this feature is rarely used.

## Goals

- Make commonly used properties and events of an OpenLayers map easily accessible in a Vue application
- give the developer access to the raw OpenLayers objects

## Non-Goals

- provide multiple map and view instances
- cover the whole OpenLayers API

## Alternatives

- https://github.com/MelihAltintas/vue3-openlayers
- https://github.com/ghettovoice/vuelayers
- https://github.com/wegue-oss/wegue/
- use OpenLayers directly with Vue

## Development

```shell
npm i
npm run dev
TODO
```

