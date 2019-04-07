import React from "react";
import ReactDOM from "react-dom";
import { Suma, Resta, Division } from "./components/randomFunctComponent";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Suma a="2" b="2" />
        <Resta a="3" b="2" />
        <Division a="4" b="2" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
