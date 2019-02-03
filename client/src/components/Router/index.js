import React from "react";
import "./styles.css";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default Router;