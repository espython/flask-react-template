// App.jsx
import React from "react";
import "../css/fullstack.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const date = new Date();
    this.setState({ date });
    console.log(date.toUTCString());
  }

  render() {
    const date = new Date();
    return (
      <div className="container">
        <h2> Hello React!</h2>
        <h3>{date.toUTCString()}</h3>
      </div>
    );
  }
}
