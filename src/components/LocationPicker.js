// src/components/LocationPicker.js
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationPicker = ({ onLocationSelect }) => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position (London)

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        onLocationSelect([e.latlng.lat, e.latlng.lng]); // Callback to send the selected location
      },
    });

    return position ? (
      <Marker position={position}>
        <Popup>Selected Location: {position[0]}, {position[1]}</Popup>
      </Marker>
    ) : null;
  };

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default LocationPicker;
