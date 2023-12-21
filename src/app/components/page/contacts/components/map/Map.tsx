'use client';

import React from 'react';
import ReactMap, { FullscreenControl, Marker } from 'react-map-gl';
import styles from './map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  return (
    <div className={styles.map}>
      <ReactMap
        mapboxAccessToken="pk.eyJ1IjoibmltZmE0NDAwIiwiYSI6ImNrdWcybzQyZTFqaHQyeG10dWo5MzQ5a2kifQ.SGFaxu_8iazsffda8R2DAA"
        initialViewState={{
          longitude: 2.3364,
          latitude: 48.86091,
          zoom: 14,
        }}
        reuseMaps
        mapStyle="mapbox://styles/mapbox/light-v10"
        cursor="grab"
      >
        <Marker
          longitude={2.3333}
          latitude={48.8602}
          anchor="top"
          color="gray"
        />
        <Marker
          longitude={2.3397}
          latitude={48.8607}
          anchor="top"
          color="gray"
        />
        <Marker
          longitude={2.333}
          latitude={48.8619}
          anchor="top"
          color="gray"
        />
        <Marker
          longitude={2.3365}
          latitude={48.8625}
          anchor="top"
          color="gray"
        />
        <Marker
          longitude={2.3364}
          latitude={48.86091}
          anchor="top"
          color="gray"
        />
        <FullscreenControl />
      </ReactMap>
    </div>
  );
}

export default Map;
