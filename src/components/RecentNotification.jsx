import "../style/recentnotifications.css";

const RecentNotification = () => {
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
  let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

  return (
    <div className="recentnotif-container">
      <div className="recentnotif-title">Session Requests</div>
      <div className="recentcontent-container">
        <div className="notif-info">
          <div className="recentnotif-name-date">
            <h4>Jim Hopper</h4>
            <p>
              <u>Requests:</u>
            </p>
            <p>
              {day} @ {time}
            </p>
          </div>
        </div>
        <div className="recentnotif-buttons">
          <button>Confirm</button>
          <a>
            <u>Deny</u>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentNotification;
