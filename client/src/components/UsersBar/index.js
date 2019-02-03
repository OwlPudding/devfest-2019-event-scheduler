import React from "react";
import "./styles.css";
import User from "../User";

const UsersBar = props => {
  return (
    <div className="users-bar">
      <User letter="A" color={props.randomColor()}/>
      <User letter="K" color={props.randomColor()}/>
      <User letter="L" color={props.randomColor()}/>
      <User letter="D" color={props.randomColor()}/>
    </div>
  );
}

export default UsersBar;