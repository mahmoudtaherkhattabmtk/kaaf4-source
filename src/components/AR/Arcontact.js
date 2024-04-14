
import Arside from "./Arside";

import "./arcontact.css";

const Arcontact = () => {
  return (
    <div className="arContainer">
      <Arside />
      <div class="section arcontact bounce-right">
        <h1 className="decore">تواصل معنا.</h1>
        <h1>
          <i className="fa fa-send-o"></i> تواصل معنا
        </h1><hr></hr>
        <h1>
          <a href="https://wa.me/201150666224">
            <i class="fa fa-whatsapp"></i> رقم الواتساب
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Arcontact;
