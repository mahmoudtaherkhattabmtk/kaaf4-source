import React from "react";
import person from "../../img/background/Birthday-133.jpg";
import Arside from "./Arside";
import "./arhome.css";
import { useNavigate } from "react-router-dom";
const Arhome = () => {
  const route = useNavigate();
  return (
    <>
      <div className="arContainer">
        <Arside />
        <div className="arhome-section">
          <div className="left-side tracking-in-expand">
            <h1 className="decore">الرئيسية.</h1>
            <h1>
              <i className="fa fa-home"> </i> الرئيسية
            </h1>
            <div className="bio">
              <h2>مرحبا بكم نحن شركة كـاف </h2>
              <section class="animation">
                <div>
                  <div>[ كـاف ]</div>
                </div>
                <div>
                  <div>[ كـاف ]</div>
                </div>
                <div>
                  <div> 👋 </div>
                </div>
              </section>
              <p>فريق مبدع لتعزيز الشباب , وبناء المستقبل </p>
              <ul>
                <li>
                  <button onClick={() => route("/arport")}>أعمالنا</button>
                </li>
                <li>
                  <a onClick={() => route("/arabout")}>
                    من نحن
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side bounce-right">
            <a>
              <img src={person} title="Team"></img>
            </a>
          </div>
        </div>
      </div>


    </>
  );
};

export default Arhome;
