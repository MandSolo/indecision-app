import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class NewSyntax {
  name = "Mand";
}

const newSyntax = new NewSyntax();

console.log(NewSyntax);
