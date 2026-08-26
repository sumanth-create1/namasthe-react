import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbWBALXabwRvoCQ4_GFkRjs7jg-K0LDyNSLvH8DZUDw&s=10" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="app">
      <Header />

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
