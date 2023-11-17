# useOl

Attempt to create a Vue composable for OpenLayers.

**Disclaimer:** The project is in an alpha state. The API will change and can break any time.

## Usage

TODO

```shell
npm i ENTER_PACKAGE_NAME
```

TODO: Add Quickstart

## API Docs

TODO

## Assumptions

- the application uses only one map instance. And the map instance has only one vie instance connected it. While in theory, with OpenLayers you can have multiple map and view instances in the same application, this feature is rarely used.

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

