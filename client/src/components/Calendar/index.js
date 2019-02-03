import "react-big-calendar/lib/css/react-big-calendar.css";
import "./styles.css";
import React from "react";
import moment from 'moment';
import data from "./mstcal.json";
import BigCalendar from 'react-big-calendar';
import TopBar from "../TopBar";

//DATA
const localizer = BigCalendar.momentLocalizer(moment);

const dataFormat = data.events.map(i => {
  return ({
    title: i.title,
    start: new Date(i.start),
    end: new Date(i.end),
    "allDay?": i["allDay?"]
  });
});

class Calendar extends React.Component {
  //Generate random color for each block
  randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  //Add each color to block
  componentDidMount = () => {
    let style = document.createElement("style");
    style.innerHTML = `.rbc-event { background-color: ${this.randomColor()} }`;
    document.body.appendChild(style);
  }

  render() {
    return (
      <div>
        {/* Pass randomColor function to top bar for user generation */}
        <TopBar randomColor={this.randomColor}/>
        <BigCalendar
          className="calendar-component"
          localizer={localizer}
          defaultView="week"
          views={["week"]}
          events={dataFormat.filter(i => i["allDay?"] === false)}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}

export default Calendar;