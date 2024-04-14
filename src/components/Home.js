import React from "react";
import SideNav from "./SideNav";

// import person from "../kaaf-blue.jpg";
import person from "../img/background/Birthday-133.jpg";

import "./home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const route = useNavigate();
  return (
    <>
      < SideNav />
      <div className="home-section">
        <div className="left-side tracking-in-expand">
          <h1 className="decore">Home.</h1>
          <h1>
            <i className="fa fa-home"> </i> Home
          </h1>
          <div className="bio">
            <h2>Hi, We Are Kaaf </h2>
            <section class="animation">
              <div>
                <div>[ Kaaf ]</div>
              </div>
              <div>
                <div>[ Kaaf ]</div>
              </div>
              <div>
                <div> 👋 </div>
              </div>
            </section>
            <p>creative team to empower youth,
              and build the future </p>
            <ul>
              <li>
                <button onClick={() => route("Port")}>Portfolio</button>
              </li>
              <li>
                <a onClick={() => route("about")}>
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side bounce-right">
          <a>
            <img src={person} title="Team" width={"300px"}></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
