import React from "react";
import "./styles.css";
import User from "../User";

class UsersBar extends React.Component {
  random = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  render() {
    return (
      <div className="users-bar">
        <User letter="A" color={this.random()}/>
        <User letter="K" color={this.random()}/>
        <User letter="L" color={this.random()}/>
        <User letter="D" color={this.random()}/>
      </div>
    );
  }
}

export default UsersBar;