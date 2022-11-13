import React from "react";
import olx_logo from "../image/olx_logo.png";
import pic3 from "../image/pic3.png";
import ad1 from "../image/ad1.jpg";
import ad2 from "../image/ad2.jpg";
import p1 from "../image/p1.jpg";
import p2 from "../image/p2.jpg";
import p3 from "../image/p3.jpg";
import p4 from "../image/p4.jpg";
import p5 from "../image/p5.jpg";
import p6 from "../image/p6.jpg";
import p7 from "../image/p7.jpg";
import p8 from "../image/p8.jpg";
import p9 from "../image/p9.jpg";
import p10 from "../image/p10.jpg";
import p11 from "../image/p11.jpg";
import p12 from "../image/p12.jpg";
import p13 from "../image/p13.jpg";
import p14 from "../image/p14.jpg";
import p15 from "../image/p15.jpg";
import p16 from "../image/p16.jpg";
import footar from "../image/footar.jpg";
import play_store from "../image/play_store.png";
import "./Header.css";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

import { FaSearch, FaComments } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FiInbox } from "react-icons/fi";
import { GiHelp } from "react-icons/gi";
import { GrLogout } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react";
import {Link} from "react-router-dom"
import Navbar from "./Navbar";
import Add from "./Add";
import {useNavigate} from "react-router-dom"
const data = JSON.parse(localStorage.getItem("data"));

const Header = () => {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.clear()
    navigate("/",{replace:true})
  }
  const handleProductPage=()=>{
    navigate("/product",{replace:true})
    console.log("kanna")
  }
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [image, setImage] = useState(true);
  const [image1, setImage1] = useState(true);
  const [load, setLoad] = useState(false);
  const [select, setSelect] = useState("");

  const options = ["USA", "India", "England", "Canada"];
  return (
    <>
      {/* <Navbar/> */}
      <div className="hedder">
        <div className="navbar">
          <img src={olx_logo} alt="" />

          <div className="country_select" id="country">
            <div className="select">
              <p id="text">Select Your Countrys</p>
              {
                <MdOutlineArrowDropDownCircle
                  className="drop_icon"
                  onClick={(e) => setShow(!show)}
                />
              }
            </div>
            {show && (
              <ul className="option_box" id="list">
                <li className="option"  style={{display:"flex",
                flexDirection:"column",
                paddingBottom:"10px"
                
                }}>
                  <HiLocationMarker className="location" />
                  {options.map(e=>(

                  <p onClick={(e) => {setSelect(e)
                  setShow(false)
                  }
                
                }>{e}
                </p>
                  ))}
                </li>
                {/* <li className="option">
                  <HiLocationMarker className="location" />
                  <p>Canada</p>
                </li>
                <li className="option">
                  <HiLocationMarker className="location" />
                  <p>India</p>
                </li>
                <li className="option">
                  <HiLocationMarker className="location" />
                  <p>England</p>
                </li> */}
              </ul>
            )}
          </div>

          <div className="search_box">
            <input
              type="text"
              placeholder="Find Cars,Mobile Phones and More...."
              className="searchclass"
              id="searchid"
            />
            <FaSearch className="search_icon" />
          </div>

          <div className="language">
            <div className="language_box">
              <p id="eng_tag">English</p>
              {
                <FaComments
                  className="drop_icon"
                  onClick={(e) => setShow1(!show1)}
                />
              }
            </div>
            {show1 && (
              <ul className="hin_eng">
                <li className="option">English</li>
                <li className="option">Hindi</li>
              </ul>
            )}
          </div>
          <IoMdNotifications className="notification" />

          <div className="your_logo">
            <div className="girl_img" id="girl_img_id">
              <img
                src={pic3}
                alt="girl_proffile"
                onClick={(e) => setShow2(!show2)}
              />
            </div>
            {show2 && (
              <div className="dropdwon" id="dropdownid">
                <div className="nameandimg">
                  <img src={pic3} alt="" />
                  <p>username</p>
                </div>
                <ul className="ul">
                  <li>
                    <RiAccountPinCircleFill className="icons" />
                    <p>Account</p>
                  </li>
                  <hr />
                  <li>
                    <FiInbox className="icons" />
                    <p>My Order</p>
                  </li>
                  <hr />
                  <li>
                    <GiHelp className="icons" />
                    <p>Help</p>
                  </li>
                  <hr />
                  <li>
                    <AiFillSetting className="icons" />
                    <p>Settings</p>
                  </li>
                  {/* <hr /> */}
                  {/* <li>
                    <GrLogout className="icons" />
                    <p>Logout</p>
                  </li> */}
                </ul>
              </div>
            )}
          </div>
          <div className="selling_page">
            <button>
              <AiOutlinePlusCircle />
              <p>SELL</p>
            </button>
          </div>
          <div className="selling_page">

            {data ? <button  onClick={handleLogout} >Logout</button>:
            <button  >
              
                <Link style={{textDecoration:"none"}} to="/login"  >Login</Link>
              
            </button>
            }
          </div>
        </div>
      </div>

      {/* // ==========================ADD1 */}
      {/* <div className="ad_img">
        <ImCross
          className={image ? "add_cros" : "del"}
          onClick={(e) => setImage(!image)}
        />
        {image && <img src={ad1} alt="addone" />}
      </div> */}

      <Add />

      {/* Products */}
        
      <div className="product">

     
        <div className="First_row"  onClick={handleProductPage} >
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p1} alt="" />
            <h2>Rs.3,500</h2>
            <p>Mi-TvStick</p>
            <div className="addres_data">
              <p>Bandra East Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p2} alt="" />
            <h2>Rs.2,500</h2>
            <p>JoyStick</p>
            <div className="addres_data">
              <p>south Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p3} alt="" />
            <h2>Rs.8,500</h2>
            <p>Fridge</p>
            <div className="addres_data">
              <p>East Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p4} alt="" />
            <h2>Rs.20,00,000</h2>
            <p>Audi</p>
            <div className="addres_data">
              <p>Bandra East Delhi</p>
              <p> Today</p>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="First_row">
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p5} alt="" />
            <h2>Rs.1,500</h2>
            <p>Jeans</p>
            <div className="addres_data">
              <p>New Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p6} alt="" />
            <h2>Rs.999</h2>
            <p>Carrom Board</p>
            <div className="addres_data">
              <p>north Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p7} alt="" />
            <h2>Rs.3,500</h2>
            <p>ear-buds</p>
            <div className="addres_data">
              <p>East Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p8} alt="" />
            <h2>Rs.13,500</h2>
            <p>Camara</p>
            <div className="addres_data">
              <p>Bandra East Delhi</p>
              <p> Today</p>
            </div>
          </div>
        </div>
        {/* Third Row  */}
        <div className="First_row">
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p9} alt="" />
            <h2>Rs.1,299</h2>
            <p>Jacket</p>
            <div className="addres_data">
              <p>west Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p10} alt="" />
            <h2>Rs.11,999</h2>
            <p>Washing Machine</p>
            <div className="addres_data">
              <p>Bandra East Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p11} alt="" />
            <h2>RS.899</h2>
            <p>Shoes</p>
            <div className="addres_data">
              <p>North Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p12} alt="" />
            <h2>Rs.5,500</h2>
            <p>Sofa</p>
            <div className="addres_data">
              <p>Bandra East Delhi</p>
              <p> Today</p>
            </div>
          </div>
        </div>
        {/* Fourth row */}
        <div className="First_row">
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p13} alt="" />
            <h2>Rs.9,13,500</h2>
            <p>Car</p>
            <div className="addres_data">
              <p>Bandra East Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p14} alt="" />
            <h2>Rs.7,500</h2>
            <p>Dinner Table 4 seater</p>
            <div className="addres_data">
              <p>Bandra East Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p15} alt="" />
            <h2>Rs.2,499</h2>
            <p>titan watch</p>
            <div className="addres_data">
              <p>Bandra East Delhi</p>
              <p> Today</p>
            </div>
          </div>
          <div className="box">
            {/* <a href="#"></a> */}
            <img src={p16} alt="" />
            <h2>Rs.13,500</h2>
            <p>dambals</p>
            <div className="addres_data">
              <p>Bandra East Delhi</p>
              <p> Today</p>
            </div>
          </div>
        </div>
      </div>
      {/* load more */}
      <div className="LOde_more">
        <button className="load-More_id" onClick={(e) => setLoad(!load)}>
          Load More{" "}
        </button>
        {load && (
          <div className="load-more_products" id="lode_more_products_id">
            <div className="First_row">
              <div className="box">
                {/* <a href="#"></a> */}
                <img src={p1} alt="" />
                <h2>Rs.3,500</h2>
                <p>Mi-TvStick</p>
                <div className="addres_data">
                  <p>Bandra East Delhi</p>
                  <p> Today</p>
                </div>
              </div>
              <div className="box">
                {/* <a href="#"></a> */}
                <img src={p2} alt="" />
                <h2>Rs.3,500</h2>
                <p>Mi-TvStick</p>
                <div className="addres_data">
                  <p>Bandra East Delhi</p>
                  <p> Today</p>
                </div>
              </div>
              <div className="box">
                {/* <a href="#"></a> */}
                <img src={p3} alt="" />
                <h2>Rs.3,500</h2>
                <p>Mi-TvStick</p>
                <div className="addres_data">
                  <p>Bandra East Delhi</p>
                  <p> Today</p>
                </div>
              </div>
              <div className="box">
                {/* <a href="#"></a> */}
                <img src={p4} alt="" />
                <h2>Rs.3,500</h2>
                <p>Mi-TvStick</p>
                <div className="addres_data">
                  <p>Bandra East Delhi</p>
                  <p> Today</p>
                </div>
              </div>
            </div>
            {/* second row */}
            <div className="First_row">
              <div className="box">
                {/* <a href="#"></a> */}
                <img src={p5} alt="" />
                <h2>Rs.3,500</h2>
                <p>Mi-TvStick</p>
                <div className="addres_data">
                  <p>Bandra East Delhi</p>
                  <p> Today</p>
                </div>
              </div>
              <div className="box">
                {/* <a href="#"></a> */}
                <img src={p6} alt="" />
                <h2>Rs.3,500</h2>
                <p>Mi-TvStick</p>
                <div className="addres_data">
                  <p>Bandra East Delhi</p>
                  <p> Today</p>
                </div>
              </div>
              <div className="box">
                {/* <a href="#"></a> */}
                <img src={p7} alt="" />
                <h2>Rs.3,500</h2>
                <p>Mi-TvStick</p>
                <div className="addres_data">
                  <p>Bandra East Delhi</p>
                  <p> Today</p>
                </div>
              </div>
              <div className="box">
                {/* <a href="#"></a> */}
                <img src={p8} alt="" />
                <h2>Rs.3,500</h2>
                <p>Mi-TvStick</p>
                <div className="addres_data">
                  <p>Bandra East Delhi</p>
                  <p> Today</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =========Ad2 */}
      <div className="ad_img">
        <GiTireIronCross
          className={image1 ? "add_cros1" : "del1"}
          onClick={(e) => setImage1(!image1)}
        />
        {image1 && <img src={ad2} alt="addone" />}
      </div>

      {/*=================== Download =========== */}

      <div className="download_app">
        <div className="download">
          <img src={footar} alt="footer_image" />
          <div className="text">
            <h1>Try This OLX App</h1>
            <p>
              Buy,sell and find just about anything using this app on your
              mobile
            </p>
          </div>
          <div className="download_store">
            <p>GET YOUR APP</p>
            <img src={play_store} alt="play_store" />
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="main_footer">
        <div className="footer">
          <div className="footer_box">
            <h2>POPULAR LOCATIONS</h2>
            <p>Mumbai</p>
            <p>Pune</p>
            <p>Chennai</p>
            <p>Andra Pradesh</p>
          </div>
          <div className="footer_box">
            <h2>TRENDING LOCATIONS</h2>
            <p>Delhi</p>
            <p>Nashik</p>
            <p>Chnadigrar</p>
            <p>Andra Pradesh</p>
          </div>
          <div className="footer_box">
            <h2>ABOUT US</h2>
            <p>About OLX Group</p>
            <p>careers</p>
            <p>Contact</p>
            <p>OLXPeople</p>
          </div>
          <div className="footer_box">
            <h2>OLX</h2>
            <p>Blog</p>
            <p>Help</p>
            <p>Legal& Privacy</p>
            <p> SiteMap</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
