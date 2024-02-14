import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './App.css';

const Map = () => {
  return (
    <div className="map-container">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={process.env.PUBLIC_URL + '/states.geojson'}>
          {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>US Map App</h1>
      <Map />
    </div>
  );
};

export default App;
