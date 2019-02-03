import React from "react";
import Calendar from "../Calendar";
import LandingPage from "../LandingPage";
import "./styles.css";
import ApiCalendar from 'react-google-calendar-api';

class App extends React.Component {
  state = {
    authenticated: false,
    credentials: []
  }
  authenticate = () => {
    ApiCalendar.handleAuthClick();
    if (ApiCalendar.sign) {
      this.setState({
        authenticated: true
      });
      ApiCalendar.listUpcomingEvents(10).then(({result}) => {
        console.log(result.items);
      });
    }
    // const eventFromNow = {
    //     summary: "Poc Dev From Now",
    //     time: 480,
    // };
    // ApiCalendar.createEventFromNow(eventFromNow)
    // .then((result) => {
    //   console.log(result);
    //     })
    //  .catch((error) => {
    //    console.log(error);
    //     });
  }
  render() {
    return (
      <div>
        { this.state.authenticated ? (
            <Calendar />
          ) : (
            <LandingPage auth={this.authenticate}/>
        )}
      </div>
    );
  }
}

export default App;