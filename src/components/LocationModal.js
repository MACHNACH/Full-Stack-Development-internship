// src/components/LocationModal.js
import React from "react";

function LocationModal({ onEnableLocation, onSearchManually }) {
  return (
    <div>
      <h2>Location Modal</h2>
      <p>Do you want to use your current location?</p>
      <button onClick={onEnableLocation}>Enable Location</button>
      <button onClick={onSearchManually}>Search Manually</button>
    </div>
  );
}

export default LocationModal;
