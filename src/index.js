import "./SeasonDisplay.css";
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./App.css";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div className="msg">
          <h2>Error:{this.state.errorMessage}</h2>
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request!" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

//timer
// class Clock extends React.Component {
//   state= {time:''}
//   componentDidMount() {
//       setInterval(() => {
//          this.setState( {time:new Date().toLocaleTimeString() })
//       }, 1000)
//   }

//   render() {
//       return (
//           <div className="time">
//               The time is: {this.state.time}
//           </div>
//       );
//   }
// }
