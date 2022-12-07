import "../style/timeStatus.css";

const TimeStatus = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  let month = months[d.getMonth()];

  return (
    <div className="timestatus-container">
      <div className="container">
        <div className="day">{day}</div>
        <div className="date">{d.getDate()}</div>
        <div className="month-year">
          {month} {d.getFullYear()}
        </div>
        <hr />
        <div className="location">Seattle, WA</div>
        <hr />
      </div>
    </div>
  );
};
export default TimeStatus;
