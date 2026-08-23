import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <div id="container">
    <h1 id="myH1">THE TOPIC IS REACT</h1>
    <SubTitle />
    <Part1 />
  </div>
);

const SubTitle = () => (
  <h2>
    Author:<p>~satyasumanth</p>
  </h2>
);

const Part1 = () => {
  return <div>
    <h3>PART 1</h3>
    <p>
       I made some stuff one react js from what i have learned so that which makes me more intrested in learning react.
    </p>


    <h3>PART 2</h3>
    <p>
       i have learned about the component composition , what does it mean means ???
       let's see it 

       placing one component inside the other. is known as componenet composition.
    </p>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Title />);
