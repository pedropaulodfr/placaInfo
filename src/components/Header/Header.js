import React from "react";
import './Heder.css'
import { AiFillHome } from "react-icons/ai";


const Header = () => {
    return(
        <div className="header-container">
            <div className="home-button-content" >
                <a href="/" rel="noopener noreferrer"><AiFillHome className="home-btn" /></a>
            </div>
        </div>
    )
}

export default Header