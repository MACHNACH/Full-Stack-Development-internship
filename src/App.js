// src/App.js
import React, { useState } from "react";
import LocationModal from "./components/LocationModal";
import LocationPicker from "./components/LocationPicker";
import AddressManager from "./components/AddressManager";

function App() {
  const [location, setLocation] = useState(null);

  const handleEnableLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(userLocation); // Store the location in state
        console.log("User Location:", userLocation); // Optional: log the location
      },
      (error) => {
        alert("Location permission denied or unavailable.");
      }
    );
  };

  const handleSearchManually = () => {
    console.log("Manual Search");
  };

  const handleLocationSelect = (newLocation) => {
    setLocation(newLocation); // Update state with the new location selected on the map
    console.log("Selected Location:", newLocation);
  };

  return (
    <div>
      <LocationModal
        onEnableLocation={handleEnableLocation}
        onSearchManually={handleSearchManually}
      />
      
      {/* Location Picker Component to choose location */}
      <LocationPicker onLocationSelect={handleLocationSelect} />

      <AddressManager />

      {location ? (
        <div>
          <h3>Location:</h3>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>No location selected</p>
      )}
    </div>
  );
}

export default App;
