import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from "react-router-dom";

import "./arsidenav.css";

const Arside = () => {
    return (
        <div class="arSideNav"><div class="container">
            <div class="logo tracking-in-expand">
                <NavLink to="/AR" className="arlogo" >
                    كـاف
                </NavLink>
                <div class="after-logo"><span><br />
                </span><span></span>
                </div>
            </div>
            <div class="navlist-bg tracking-in-expand">
                <ul>
                    <li>
                        <NavLink to="/AR">الرئيسية</NavLink>
                    </li>
                    <li>
                        <NavLink to="/arabout">من نحن</NavLink>
                    </li>
                    <li>
                        <NavLink to="/arfacts">حقائق</NavLink>
                    </li>
                    <li>
                        <NavLink to="/arexp">خبراتنا</NavLink>
                    </li>
                    <li>
                        <NavLink to="/arport">أعمالنا</NavLink>
                    </li>
                    <li>
                        <NavLink to="/arcontact">تواصل معنا</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">ُEnglish</NavLink>
                    </li>
                </ul>
            </div>
            <div class="navlist-xs tracking-in-expand">
                <ul>
                    <li>
                        <NavLink to="/AR"><i class="fa fa-home"></i> <br /> الرئيسية</NavLink>
                    </li>
                    <li>
                        <NavLink to="/arabout"><i class="fa fa-black-tie"></i> <br /> من نحن</NavLink>
                    </li>
                    <li>
                        <NavLink to="/arfacts"><i class="fa fa-coffee"></i> <br /> حقائق</NavLink>
                    </li>
                    <li>
                        <NavLink to="/arexp"><i class="fa fa-briefcase "></i> <br /> خبراتنا</NavLink>
                    </li>
                    <li>
                        <NavLink to="/arport"><i class="fa fa-address-card-o"></i> <br />  أعمالنا</NavLink>

                    </li>
                    <li>
                        <NavLink to="/arcontact"><i class="fa fa-send-o"></i> <br />  تواصل معنا</NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><i class="fa fa-language"></i> <br />ُ English</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
}
export default Arside;