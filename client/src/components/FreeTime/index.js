import React from "react";
import "./styles.css";

const data = [
  "2-03: 07:00 to 23:00",
  "2-03: 23:10 to 24:00",
  "2-04: 07:00 to 10:30",
  "2-04: 12:00 to 16:15",
  "2-04: 23:10 to 24:00",
  "2-05: 07:00 to 17:30",
  "2-05: 23:10 to 24:00",
  "2-06: 07:00 to 08:40",
  "2-06: 10:00 to 10:10",
  "2-06: 13:00 to 13:10",
  "2-06: 14:25 to 14:40",
  "2-06: 15:55 to 19:30",
  "2-06: 23:10 to 24:00",
  "2-07: 07:00 to 10:00",
  "2-07: 14:00 to 14:10",
  "2-07: 16:00 to 16:10",
  "2-07: 17:25 to 17:30",
  "2-07: 18:30 to 20:00",
  "2-07: 23:10 to 24:00",
  "2-08: 07:00 to 10:00",
  "2-08: 12:00 to 13:00",
  "2-08: 15:30 to 17:30",
  "2-08: 23:10 to 24:00",
  "2-09: 07:00 to 10:10",
  "2-09: 23:10 to 24:00",
  "2-04: 07:00 to 08:40",
  "2-04: 09:55 to 12:10",
  "2-04: 14:00 to 14:40",
  "2-04: 17:30 to 24:00",
  "2-05: 07:00 to 13:10",
  "2-05: 15:30 to 16:10",
  "2-05: 19:30 to 24:00",
  "2-06: 07:00 to 08:30",
  "2-06: 09:55 to 11:00",
  "2-06: 11:30 to 12:10",
  "2-06: 14:00 to 14:40",
  "2-06: 19:00 to 24:00",
  "2-07: 07:00 to 13:10",
  "2-07: 17:25 to 24:00",
  "2-07: 07:00 to 20:00"
];
class FreeTime extends React.Component {
  render() {
    return (
      <div className="free-time">
        <h2>Suggested time slots</h2>
        <ul>
          {data.map(item => {
            return <div><li>{item}</li><input type="checkbox" /></div>;
          }) }
          {/* <li>Mon  6:00pm - 9:00pm</li><input type="checkbox" />
          <br></br>
          <li>Tues 9:00am - 1:00pm</li><input type="checkbox" />
          <br></br>
          <li>Wed  4:00pm - 6:00pm</li><input type="checkbox" />
          <br></br>
          <li>Fri  4:00pm - 5:00pm</li><input type="checkbox" />
          <br></br>
          <li>Fri  7:00pm - 9:00pm</li><input type="checkbox" />
          <br></br>
          <li>Sat  1:00pm - 9:00pm</li><input type="checkbox" /> */}
        </ul>
      </div>
    );
  }
}

export default FreeTime;