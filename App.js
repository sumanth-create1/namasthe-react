import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToRDT1WsNEwjFGAAcO1lFpQs66pjhkJ5T0PRtI0-4KWg&s=10"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Log In</li>
          <li>SignIn</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img src="https://b.zmtcdn.com/data/pictures/1/22643711/82da6b55d89313f00260f02f1f2c5a55_o2_featured_v2.jpg" />
      </div>
      {/* res-Info */}

      <div className="res-Info">
        <div className="restaurant-name-row">
          <h3>Aalaya Pure Veg</h3>

          <span className="rating">4.1 ⭐</span>
        </div>

        <div className="details-row">
          <span className="cuisine">
            South Indian
          </span>

          <span className="price">
            ₹ 200 for one
          </span>
        </div>

        <div className="time">
            19 min
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
