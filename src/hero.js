import React from "react";
import group from "./group.png";
import './index.css';

export default function Hero (props) {
    return (
        <div className="hcontainer">
            <img className="hero" alt="hero" src={group}></img>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}