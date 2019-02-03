import React from "react";
import "./styles.css";
import Title from "../Title";
import UsersBar from "../UsersBar";

class TopBar extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <Title />
        <UsersBar />
      </div>
    );
  }
}

export default TopBar;