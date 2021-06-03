# react-leaflet-google-v2 [![npm version](https://img.shields.io/npm/v/react-leaflet-google-v2.svg)](https://www.npmjs.com/package/react-leaflet-google-v2)![npm downloads](https://img.shields.io/npm/dw/react-leaflet-google-v2)

Most recently tested with Leaflet React-Leaflet 3.0.5.

GoogleMaps layer as React component for Leaflet build on top of [React-Leaflet](https://github.com/PaulLeCam/react-leaflet). 

The google maps layer is using the plugin from [Leaflet.GridLayer.GoogleMutant](https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant) 

Also it uses [google-maps](https://www.npmjs.com/package/google-maps), a wrapper for asynchronously download Google Maps API in the browser.

![Example](images/example.gif)

## Complete example with react-leaflet

To get started, to be able to run the example you have execute:
```bash
npm install
```

```jsx
import React from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import { GoogleLayer } from '../src'
const { BaseLayer } = LayersControl;
const key = 'your key goes here';
const terrain = 'TERRAIN';
const road = 'ROADMAP';
const satellite = 'SATELLITE';
const hydrid = 'HYBRID';
//// Google's map type. Valid values are 'roadmap', 'satellite' or 'terrain'. 'hybrid' is not really supported.

export default class GoogleExample extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <MapContainer center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
        <LayersControl position='topright'>
          <BaseLayer  name='OpenStreetMap.Mapnik'>
            <TileLayer  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
          </BaseLayer>
         <BaseLayer checked name='Google Maps Roads'>
            <GoogleLayer googlekey={key}  maptype={road} />
          </BaseLayer>
         <BaseLayer  name='Google Maps Terrain'>
            <GoogleLayer googlekey={key}  maptype={terrain} />
          </BaseLayer>
           <BaseLayer  name='Google Maps Satellite'>
            <GoogleLayer googlekey={key}  maptype={satellite} />
          </BaseLayer>
            <BaseLayer  name='Google Maps Hydrid'>
            <GoogleLayer googlekey={key}  maptype={hydrid}  libraries={['geometry', 'places']} />
          </BaseLayer>  
          <BaseLayer  name='Google Maps with Libraries'>
            <GoogleLayer googlekey={key}  maptype={hydrid}  libraries={['geometry', 'places']} />
          </BaseLayer>        
        </LayersControl>
      </MapContainer>
    )
  }
}


```

You can find the following example in the folder ```example```. Run the above code by executing the following scripts in package.json, with the order they are stated underneath:

1) ```build```

1) ```example```
