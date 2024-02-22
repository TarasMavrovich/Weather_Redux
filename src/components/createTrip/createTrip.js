import React, { useState } from "react";
import style from "./style.module.css";

const CreateTripModal = ({ onAddTrip, onHide }) => {
  const [newTrip, setNewTrip] = useState({
    id: Date.now(),
    destination: "",
    startDate: "",
    endDate: "",
  });

  const [errors, setErrors] = useState({
    id: Date.now(),
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
    const currentDate = new Date();
    const startDate = new Date(newTrip.startDate);
    const endDate = new Date(newTrip.endDate);

    if (!newTrip.destination) {
      newErrors.destination = "City is required.";
    }

    if (
      !newTrip.startDate ||
      startDate < currentDate ||
      startDate > addDays(currentDate, 15)
    ) {
      newErrors.startDate = "Start Date must be within the next 15 days.";
    }

    if (
      !newTrip.endDate ||
      endDate < currentDate ||
      endDate > addDays(currentDate, 15)
    ) {
      newErrors.endDate = "End Date must be within the next 15 days.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddTrip(newTrip);
    onHide();
  };

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
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
