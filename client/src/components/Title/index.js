import React from "react";
import "./styles.css";

class Title extends React.Component {
  render() {
    return (
      <form className="title-component">
        <input
          type="text"
          placeholder="Event Title"
          autoFocus/>
      </form>
    );
  }
}

export default Title;