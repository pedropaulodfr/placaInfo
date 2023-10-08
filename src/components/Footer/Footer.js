import React from "react";
import './Footer.css'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="autor">
                <h1>DEVELOPED BY PEDRO PAULO</h1>
            </div>
            <div className="social-media">
                <a href="https://github.com/pedropaulodfr" target="_blank" rel="noopener noreferrer"><BsGithub style={{'marginRight': '10px', 'cursor': 'pointer'}} /></a>
                <a href="https://www.linkedin.com/in/pedropaulodfr" target="_blank" rel="noopener noreferrer"><BsLinkedin style={{'marginRight': '10px', 'cursor': 'pointer'}}/></a>
            </div>
        </footer>
    )
}

export default Footer