import React from "react";
import "./styles.css";

class User extends React.Component {
  render() {
    return (
      <div className="user-circle" style={{
        border: `2px solid ${this.props.color}`,
        color: `${this.props.color}`
      }}>{this.props.letter}</div>
    );
  }
}

export default User;