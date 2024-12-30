// src/components/AddressForm.js
import React, { useState } from "react";

function AddressForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    houseNumber: "",
    area: "",
    category: "Home",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="House/Flat/Block No."
        value={formData.houseNumber}
        onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
      />
      <input
        type="text"
        placeholder="Apartment/Road/Area"
        value={formData.area}
        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
      />
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="Friends & Family">Friends & Family</option>
      </select>
      <button type="submit">Save Address</button>
    </form>
  );
}

export default AddressForm;
