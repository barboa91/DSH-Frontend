import "../style/session.css";

const Sessions = () => {
  return (
    <div className="session-container">
      <div className="container"></div>
      <div className="sessions">
        <p>Upcoming Sessions</p>
        <ul>
          <li>
            <span>Will Beyers</span>
          </li>
          <p>Today @3:30pm</p>
          <hr />
          <li>
            <span>El Even</span>
          </li>
          <p>Today @4:30pm</p>
          <hr />
          <li>
            <span>Mike Wheeler</span>
          </li>
          <p>Today @5:30pm</p>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default Sessions;
