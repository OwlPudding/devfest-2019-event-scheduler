import React from "react";
import "./styles.css";

class LandingPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="landing-page">
        <h1>Schedule Events. Smarter.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="splash">
          Super dope gif here
        </div>
        <button
          className="authorize-button"
          onClick={(e) => this.props.auth(e, 'sign-in')}>
          Import Google Calender Events</button>
        <button className="alt-setup">Don't have Google Calendar?</button>
      </div>
    );
  }
}

export default LandingPage;