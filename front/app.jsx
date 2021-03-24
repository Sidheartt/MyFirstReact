import React from "react";
import ReactDOM from "react-dom";

const fname = "Siddharth";
const lname = "Desai"
const num = 7;

ReactDOM.render(
<div>
  <h1>Hello {fname + " " + lname} ! </h1>
  <p>Already love React</p>
  <p>my lucky number is {num}</p>
</div>, 
document.getElementById("root"));
