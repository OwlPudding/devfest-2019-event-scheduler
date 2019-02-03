import React from "react";
import "./styles.css";
import User from "../User";

class UsersBar extends React.Component {
  render() {
    return (
      <div className="users-bar">
        <User letter="A" color={this.props.randomColor()}/>
        <User letter="K" color={this.props.randomColor()}/>
        <User letter="L" color={this.props.randomColor()}/>
        <User letter="D" color={this.props.randomColor()}/>
      </div>
    );
  }
}

export default UsersBar;