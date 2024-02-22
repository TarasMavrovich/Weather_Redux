import style from "./style.module.css";
const TripItem = ({ trip, onSelectTrip }) => {
  if (!trip) {
    return null;
  }
  const { destination, startDate, endDate } = trip;

  const handleSelect = () => {
    onSelectTrip(trip);
  };

  return (
    <div className={style.container} onClick={handleSelect}>
      <img
        src="https://via.placeholder.com/150x150.png"
        alt={destination}
        className={style.img}
      />
      <div className={style.description}>
        <div className={style.name}>{destination}</div>
        <div className={style.date}>
          {startDate} - {endDate}
        </div>
      </div>
    </div>
  );
};

export default TripItem;
