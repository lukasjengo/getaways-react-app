import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Tour } from 'models/Tour';
import CustomIcon from 'components/customIcon/CustomIcon';

interface TourMapProps {
  currentTour: Tour;
}

const MapLocation: React.FC<any> = ({ loc }) => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div onClick={() => setShowPopup(true)}>
      {showPopup && (
        <Popup
          latitude={loc.coordinates[1]}
          longitude={loc.coordinates[0]}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
        >
          <div>You are here</div>
        </Popup>
      )}
      <Marker
        key={loc._id}
        latitude={loc.coordinates[1]}
        longitude={loc.coordinates[0]}
      >
        <CustomIcon name="icon-location-pin" size="2.5rem" />
      </Marker>
    </div>
  );
};

const TourMap: React.FC<TourMapProps> = ({ currentTour }) => {
  const [mapState, setMapState] = useState({
    viewport: {
      zoom: 5,
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
    >
      {currentTour.locations.map(loc => (
        <MapLocation loc={loc} />
      ))}
      <Marker
        latitude={currentTour.startLocation.coordinates[1]}
        longitude={currentTour.startLocation.coordinates[0]}
      >
        <CustomIcon name="icon-location-pin" size="2.5rem" />
      </Marker>
    </ReactMapGL>
  );
};

export default TourMap;
