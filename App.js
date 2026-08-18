import React from "react";
import ReactDOM from "react-dom/client";

// this is a REACT element
const heading = <h1 className="root">this is a react Element</h1>;

// REACT Functional Component


const Title = () => (
    <h1>
        React Component
    </h1>
);

const HeadingComponent = () => (
    
  <div id="container">
    <Title />
    <h1>hyy Anitha !!</h1>
    <h1>from functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
