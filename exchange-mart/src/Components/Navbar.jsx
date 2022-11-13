// // import React, { useState } from 'react'
// import olx_logo from "../image/olx_logo.png";
// import pic3 from "../image/pic3.jpg";
// import ad1 from "../image/ad1.jpg";
// import ad2 from "../image/ad2.jpg";
// import p1 from "../image/p1.jpg";
// import p2 from "../image/p2.jpg";
// import p3 from "../image/p3.jpg";
// import p4 from "../image/p4.jpg";
// import p5 from "../image/p5.jpg";
// import p6 from "../image/p6.jpg";
// import p7 from "../image/p7.jpg";
// import p8 from "../image/p8.jpg";
// import p9 from "../image/p9.jpg";
// import p10 from "../image/p10.jpg";
// import p11 from "../image/p11.jpg";
// import p12 from "../image/p12.jpg";
// import p13 from "../image/p13.jpg";
// import p14 from "../image/p14.jpg";
// import p15 from "../image/p15.jpg";
// import p16 from "../image/p16.jpg";
// import footar from "../image/footar.jpg";
// import play_store from "../image/play_store.png";
// import "./Header.css";
// import { MdOutlineArrowDropDownCircle } from "react-icons/md";
// import { HiLocationMarker } from "react-icons/hi";

// import { FaSearch, FaComments } from "react-icons/fa";
// import { RiAccountPinCircleFill } from "react-icons/ri";
// import { FiInbox } from "react-icons/fi";
// import { GiHelp } from "react-icons/gi";
// import { GrLogout } from "react-icons/gr";
// import { AiFillSetting } from "react-icons/ai";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { IoMdNotifications } from "react-icons/io";
// import { ImCross } from "react-icons/im";
// import { GiTireIronCross } from "react-icons/gi";
// import { useState } from "react";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const [show1, setShow1] = useState(false);
//   const [show2, setShow2] = useState(false);
//   const [select, setSelect] = useState("");
//   return (
//     <div>
//       <div className="hedder">
//         <div className="navbar">
//           <img src={olx_logo} alt="" />

//           <div className="country_select" id="country">
//             <div className="select">
//               <p id="text">Select Your Countrys</p>
//               {
//                 <MdOutlineArrowDropDownCircle
//                   className="drop_icon"
//                   onClick={(e) => setShow(!show)}
//                 />
//               }
//             </div>
//             {show && (
//               <ul className="option_box" id="list">
//                 <li className="option">
//                   <HiLocationMarker className="location" />
//                   <p onClick={(e) => setSelect(e.target.textcontent)}>USA</p>
//                 </li>
//                 <li className="option">
//                   <HiLocationMarker className="location" />
//                   <p>Canada</p>
//                 </li>
//                 <li className="option">
//                   <HiLocationMarker className="location" />
//                   <p>India</p>
//                 </li>
//                 <li className="option">
//                   <HiLocationMarker className="location" />
//                   <p>England</p>
//                 </li>
//               </ul>
//             )}
//           </div>

//           <div className="search_box">
//             <input
//               type="text"
//               placeholder="Find Cars,Mobile Phones and More...."
//               className="searchclass"
//               id="searchid"
//             />
//             <FaSearch className="search_icon" />
//           </div>

//           <div className="language">
//             <div className="language_box">
//               <p id="eng_tag">English</p>
//               {
//                 <FaComments
//                   className="drop_icon"
//                   onClick={(e) => setShow1(!show1)}
//                 />
//               }
//             </div>
//             {show1 && (
//               <ul className="hin_eng">
//                 <li className="option">English</li>
//                 <li className="option">Hindi</li>
//               </ul>
//             )}
//           </div>
//           <IoMdNotifications className="notification" />

//           <div className="your_logo">
//             <div className="girl_img" id="girl_img_id">
//               <img
//                 src={pic3}
//                 alt="girl_proffile"
//                 onClick={(e) => setShow2(!show2)}
//               />
//             </div>
//             {show2 && (
//               <div className="dropdwon" id="dropdownid">
//                 <div className="nameandimg">
//                   <img src={pic3} alt="" />
//                   <p>Deepti</p>
//                 </div>
//                 <ul className="ul">
//                   <li>
//                     <RiAccountPinCircleFill className="icons" />
//                     <p>Account</p>
//                   </li>
//                   <hr />
//                   <li>
//                     <FiInbox className="icons" />
//                     <p>My Order</p>
//                   </li>
//                   <hr />
//                   <li>
//                     <GiHelp className="icons" />
//                     <p>Help</p>
//                   </li>
//                   <hr />
//                   <li>
//                     <AiFillSetting className="icons" />
//                     <p>Settings</p>
//                   </li>
//                   <hr />
//                   <li>
//                     <GrLogout className="icons" />
//                     <p>Logout</p>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <div className="selling_page">
//             <button>
//               <AiOutlinePlusCircle />
//               <p>SELL</p>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
