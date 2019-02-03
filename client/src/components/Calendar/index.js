import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";
import moment from 'moment';
import axios from "axios";

//COMPONENTS
import BigCalendar from 'react-big-calendar';
import TopBar from "../TopBar";
import "./styles.css";


//import data from "./mstcal.json";

//DATA
const localizer = BigCalendar.momentLocalizer(moment);

// const myEventsList = {
//   one: {
//     title: "My event one",
//     start: Date.now(),
//     end: Date.now(),
//   }
// }

/**
 * Event {
    title: string,
    start: Date,
    end: Date,
    allDay?: boolean
    resource?: any,
  }
  */

class Calendar extends React.Component {
  // getJSON = () => {
  //   axios.get("./mstcal.json").then(resp => {
  //     console.log(resp.data);
  //   })
  // }
  render() {
    //console.log(data);
    return (
      <div>
        <TopBar />
        <BigCalendar
          className="calendar-component"
          localizer={localizer}
          defaultView="week"
          views={["week"]}
          events={[]}
          startAccessor="start"
          endAccessor="end"
        />
        <button onClick={this.getJSON}>CLICK ME</button>
      </div>
    );
  }
}

export default Calendar;