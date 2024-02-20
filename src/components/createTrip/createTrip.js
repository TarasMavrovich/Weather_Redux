// CreateTripModal.js
import React, { useState } from "react";

const CreateTripModal = ({ onAddTrip, onHide }) => {
  const [newTrip, setNewTrip] = useState({
    destination: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrip((prevTrip) => ({ ...prevTrip, [name]: value }));
  };

  const handleAddTrip = () => {
    onAddTrip(newTrip);
    onHide();
  };

  return (
    <div>
      <h2>Create Trip</h2>
      <label>
        Destination:
        <input
          type="text"
          name="destination"
          value={newTrip.destination}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={newTrip.startDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={newTrip.endDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={handleAddTrip}>Add Trip</button>
      <button onClick={onHide}>Cancel</button>
    </div>
  );
};

export default CreateTripModal;
