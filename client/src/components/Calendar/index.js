import "react-big-calendar/lib/css/react-big-calendar.css";
import "./styles.css";
import React from "react";
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import TopBar from "../TopBar";

//Temporary test data
import data from "./mstcal.json";
import FreeTime from "../FreeTime";

//Gets the data to display properly on the calendar
const dataFormat = data.events.map(i => {
  return ({
    title: i.title,
    start: new Date(i.start),
    end: new Date(i.end),
    "allDay?": i["allDay?"]
  });
}).filter(i => i["allDay?"] === false);

//for each element in list of event dictionaries
//get the username from the flask backend and associate a new random color
//then pass that random color for each of their events
const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  state = {
    users: []
  }
  randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  componentDidMount = () => {
    // users.map( (user, index) => {
      const color = this.randomColor();
      let style = document.createElement("style");
      style.innerHTML = `.rbc-event { background-color: ${color} }`;
      document.body.appendChild(style);
  }
  render() {
    console.log(data.events);
    console.log(data.events.map(d => d.title ) )
    console.log("--------------")
    const userOne = data.events.filter(d => d.title == 6);
    const userTwo = data.events.filter(d => d.title == 9);
    console.log(userOne);
    console.log(userTwo);
    console.log("-----------------------");
    console.log(dataFormat);
    return (
      <div>
        <TopBar randomColor={this.randomColor}/>
        <div className="app-layout">
          <BigCalendar
            className="calendar-component"
            localizer={localizer}
            defaultView="week"
            views={["week"]}
            events={dataFormat}
            startAccessor="start"
            endAccessor="end"
          />
          <FreeTime/>
        </div>
      </div>
    );
  }
}

export default Calendar;