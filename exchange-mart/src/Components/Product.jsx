import React from "react";
import Add from "./Add";
import Navbar from "./Navbar";
import "./Header.css";
import "./Product.css";
import pro_1 from "../image/image2/pro_1.jpg";
import pic21 from "../image/image2/pic21.jpg"
import location from "../image/image2/location.png"
import pro_2 from "../image/image2/pro_2.jpg";
import pro_3 from "../image/image2/pro_3.jpg";
import pro_4 from "../image/image2/pro_4.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import {Link} from "react-router-dom"

const data = JSON.parse(localStorage.getItem("data"));

const Product = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Add />

     
      <button style={{marginTop:"30px",padding:"10px 20px",backgroundColor:"white" ,borderRadius:"5px"}}  >
            <Link  style={{textDecoration:"none",color:"black"}} to="/" >Home</Link>
          </button>
      <div className="product_img">
        <div className="image_discription">
          <img src={pro_1} alt="" />
          <div className="descriptiopn">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              assumenda quas id consequatur vel saepe vitae non doloremque culpa
              cupiditate laboriosam amet reiciendis, eligendi libero. Repellat
              ipsam quibusdam saepe placeat!
            </p>
          </div>
        </div>
        
        <div className="product_details">

          
          <div className="box">
            <div className="price">
              <h3>Rs.3500</h3>
              <p>
                <AiOutlineHeart />
              </p>
              <p>
                {" "}
                <BiShareAlt />
              </p>
            </div>
            <span>Mi Tv Stick</span>
            <div className="location">
              <p>Bandra West mumbai </p>
              <p>Today</p>
            </div>
          </div>
          <div className="box" id="box2">
            <p className="Seller_description">Seller Description</p>
            <div className="seller_detail">
              <img src={pic21} alt="" />
              <div>

              <h2>Bablu</h2>
              <p>Member Since 2017</p>
              </div>
            </div>

          <a href="#">Chat With Seller</a>
          </div>

          <div className="box"  id="box3">
            <h2>Posted in </h2>
            <p>Bandra East</p>
            <img src={location} alt="" />


          </div>
        </div>
      </div>
    </div>
  );

}

export default Product

