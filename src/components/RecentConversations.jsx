import "../style/recentconversations.css";

const RecentConversation = () => {
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
    <div className="recentconvo-container">
      <div className="convotitle">Recent Conversations</div>
      <div className="convocontent-container">
        <div className="text-container">
          <div className="time">
            <h4>Will Beyers</h4>
            <p>{time}</p>
          </div>
          <p>Hey Janet, can you help me out with some science stuff?</p>
        </div>
        <div className="text-container">
          <div className="time">
            <h4>Lucus Sinclaire</h4>
            <p>{time}</p>
          </div>
          <p>Janet, can we have a lesson again?</p>
        </div>
      </div>
    </div>
  );
};

export default RecentConversation;
