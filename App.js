import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"}, "Anitha is not here!!");

const root = ReactDOM.createRoot(document.getElementById("root"));



const heading2 = <h1 id = "heading">this is my new REACT</h1>

console.log(heading2);


root.render(heading2);


