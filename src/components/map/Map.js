import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL from 'react-map-gl';

const Map = ({ currentTour }) => {
  const [mapState, setMapState] = useState({
    viewport: {
      zoom: 8,
    },
  });
  return (
    <ReactMapGL
      width="100%"
      height="40rem"
      longitude={currentTour.startLocation.coordinates[0]}
      latitude={currentTour.startLocation.coordinates[1]}
      {...mapState.viewport}
      onViewportChange={viewport => setMapState({ viewport })}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    />
  );
};

Map.propTypes = {};

export default Map;
