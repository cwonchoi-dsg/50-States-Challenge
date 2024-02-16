import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './App.css';

import allStates from "./data/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const Map = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [clickedState, setClickedState] = useState(null);

  const handleMouseEnter = (geo) => {
    setHoveredState(geo.properties.NAME); // Assuming NAME is the property containing the state name
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };

  const handleClick = (geo) => {
    setClickedState(geo.properties.NAME);
  };

  return (
    <div className="map-container">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => handleMouseEnter(geo)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(geo)}
                style={{
                  default: {
                    fill: clickedState === geo.properties.NAME ? 'red' : hoveredState === geo.properties.NAME ? 'orange' : '#ECEFF1',
                    outline: 'none',
                  },
                  hover: {
                    fill: 'orange',
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#FF5722',
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {hoveredState && <div>Hovered State: {hoveredState}</div>}
      {clickedState && <div>Clicked State: {clickedState}</div>}
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
