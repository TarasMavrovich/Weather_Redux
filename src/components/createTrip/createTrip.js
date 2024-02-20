// CreateTripModal.js
import React, { useState } from "react";
import style from "./style.module.css";

const CreateTripModal = ({ onAddTrip, onHide }) => {
  const [newTrip, setNewTrip] = useState({
    destination: "",
    startDate: "",
    endDate: "",
  });

  const [errors, setErrors] = useState({
    destination: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrip((prevTrip) => ({ ...prevTrip, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleAddTrip = () => {
    const newErrors = {};
    if (!newTrip.destination) {
      newErrors.destination = "City is required.";
    }
    if (!newTrip.startDate) {
      newErrors.startDate = "Start Date is required.";
    }
    if (!newTrip.endDate) {
      newErrors.endDate = "End Date is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddTrip(newTrip);
    onHide();
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.create_trip}>Create trip</div>
        <button className={style.button} onClick={onHide}>
          X
        </button>
      </header>
      <div className={style.main}>
        <div>
          <label className={style.trip}>
            <span>*</span>
            City:
            <input
              type="text"
              name="destination"
              value={newTrip.destination}
              onChange={handleInputChange}
            />
            <div className={style.error}>{errors.destination}</div>
          </label>
        </div>
        <div>
          <label className={style.trip}>
            <span>*</span>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={newTrip.startDate}
              onChange={handleInputChange}
            />
            <div className={style.error}>{errors.startDate}</div>
          </label>
        </div>
        <div>
          <label className={style.trip}>
            <span>*</span>
            End Date:
            <input
              type="date"
              name="endDate"
              value={newTrip.endDate}
              onChange={handleInputChange}
            />
            <div className={style.error}>{errors.endDate}</div>
          </label>
        </div>
      </div>
      <div className={style.button_container}>
        <button className={style.cancel_btn} onClick={onHide}>
          Cancel
        </button>
        <button className={style.save_btn} onClick={handleAddTrip}>
          Add Trip
        </button>
      </div>
    </div>
  );
};

export default CreateTripModal;
