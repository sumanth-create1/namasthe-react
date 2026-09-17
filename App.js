import React from "react";
import ReactDOM from "react-dom/client";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">Foodicide</div>

      {/* Search container */}

      <div className="search-container">
        {/* Location */}

        <div className="location-box">
          <span className="location-icon">📍</span>
          <span className="location-text">Nellore</span>
          <span className="arrow">▼</span>
        </div>

        {/* Divider */}

        <div className="divider"></div>

        {/* Search */}

        <div className="search-box">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>

      <div className="auth-links">
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Navbar />

    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img src={props.foodLogo} />
      </div>
      {/* res-Info */}

      <div className="res-Info">
        <div className="restaurant-name-row">
          <h3>{props.resName}</h3>

          <span className="rating">{props.rating}⭐</span>
        </div>

        <div className="details-row">
          <span className="cuisine">{props.cuisine}</span>

          <span className="price">₹ {props.price} for one</span>
        </div>

        <div className="time">{props.time} min</div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCard
          foodLogo="https://b.zmtcdn.com/data/pictures/3/18826243/d422a41eca24ea574443bbf680875d66_o2_featured_v2.jpg"
          resName="Hotel Riyaz"
          rating="3.8"
          cuisine="Biriyani, kebab"
          price="150"
          time="29"
        />
        <RestaurantCard
          foodLogo="https://b.zmtcdn.com/data/pictures/8/21772208/81389ebffc03243769353ada46c5666f_o2_featured_v2.jpg"
          resName="Raju Gari Kodi Pulao"
          rating="4.0"
          cuisine="Middle Eastern ,South Indian"
          price="250"
          time="24"
        />
        <RestaurantCard
          foodLogo="https://b.zmtcdn.com/data/pictures/1/19162071/a65ffbf44accdb75c6cb41a78b97596e_o2_featured_v2.jpg"
          resName="RayalaseemaRuchulu"
          rating="4.1"
          cuisine="Biriyani, North Indian, South Indian"
          price="100"
          time="25"
        />

        <RestaurantCard
          foodLogo="https://b.zmtcdn.com/data/pictures/9/19942799/e5afca14c42e1104b5f9f1eb64d52b2f_o2_featured_v2.jpg?output-format=webp"
          resName="The biryani life"
          rating="3.4"
          cuisine="Biryani, Mughal Biryani"
          price="200"
          time="59"
        />

        <RestaurantCard
          foodLogo="https://b.zmtcdn.com/data/pictures/4/19942774/1a49b55dc1f6734bf1fb5885aaafe183_o2_featured_v2.jpg?output-format=webp"
          resName="Behrouz biryani"
          rating="3.6"
          cuisine="Biryani, kebab"
          price="300"
          time="58"
        />

        <RestaurantCard
          foodLogo="https://b.zmtcdn.com/data/dish_photos/2c5/110c67132f62f7616b2f706c8994f2c5.jpeg?output-format=webp"
          resName="Lunchbox"
          rating="4.1"
          cuisine="North Indian"
          price="150"
          time="58"
        />
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
