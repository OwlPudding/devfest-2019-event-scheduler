import React from "react";
import "./styles.css";
import User from "../User";

class UsersBar extends React.Component {
  render() {
    return (
      <div className="users-bar">
        <User letter="A" color="tomato"/>
        <User letter="K" color="blue"/>
        <User letter="L" color="green"/>
        <User letter="D" color="purple"/>
      </div>
    );
  }
}

export default UsersBar;