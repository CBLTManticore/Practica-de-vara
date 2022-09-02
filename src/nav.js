import React from "react";
import airbnb from "./airbnb.png";
import './index.css';

export default function Navbar () {
    return(
        <nav className="navigation">
            <img className="nav--logo" alt="logo" src={airbnb} width="100px"/>
        </nav>
    )
}