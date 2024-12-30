// src/components/AddressManager.js
import React, { useState } from "react";
import AddressForm from "./AddressForm"; // Import the AddressForm component

function AddressManager() {
  const [addresses, setAddresses] = useState([]);

  const saveAddress = (address) => {
    setAddresses((prevAddresses) => [...prevAddresses, address]);
  };

  return (
    <div>
      <h2>Address Manager</h2>
      <AddressForm onSubmit={saveAddress} />
      <div>
        <h3>Saved Addresses:</h3>
        <ul>
          {addresses.map((address, index) => (
            <li key={index}>
              {address.houseNumber}, {address.area} - {address.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddressManager;
