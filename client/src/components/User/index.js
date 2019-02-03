import React from "react";
import "./styles.css";

const User = props => {
  return (
    <div className="user-circle" style={{
      border: `2px solid ${props.color}`,
      color: `${props.color}`
    }}>{props.letter}</div>
  );
}

export default User;