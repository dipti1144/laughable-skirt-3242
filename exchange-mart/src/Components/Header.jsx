
import React from "react";
import { SearchIcon, ChevronDownIcon, PlusSquareIcon } from "@chakra-ui/icons"
import {Box,Button,Image,Input,Flex} from "@chakra-ui/react"
import { Link } from "react-router-dom";



export default function Headers(){
    return (
        <div className="header fixed flex aic">
            <div className="logo">
               <img src={require("../Images/logo.jpg")}/>
            </div>
            <div className="location rel flex aic">
                 <div className="icon-search ico s24">
                    <SearchIcon fontSize="24px"/>
                 </div>
                 <input className="lable s15 font" placeholder="Your Location " value="India"/>
                 <button className="icon-chevron-dowm arrow ">
                    <ChevronDownIcon fontSize="24px" />
                 </button>
            </div>
            <div className="search flex aic">
                 <input type="text" placeholder="Find Cars , Mobile Phones and More..." className="query font s15"  />
                 <button className="icon-search go s24 cfff">
                    <SearchIcon fontSize="24px" color="#ffffff" />
                 </button>
            </div>
            <div className="actions flex aic">
                <Link to="account/signin" className="color fontb s16 noulh noul">Sign in</Link>
                <button className="sell flex color aic">
                    <div className="icon-plus s24">
                        <PlusSquareIcon fontSize="24px" marginRight="6px"/>
                    </div>
                    <h2 className="s24 fontb" fontWeight="bold" >SELL</h2>
                </button>

            </div>
        </div>
    )
}