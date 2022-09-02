import React from "react";
import Star from "./Star.png";
import './index.css';

export default function Card (props) {
    return (
        <div className="ccontainer">
            <div>
                <img className="cover" alt="cover" src={props.image} />
            </div>
            <div className="details">
                <div>
                    <img alt="star" src={Star} />
                    <span>{props.rating}</span>
                </div>
                <div>
                    <p>{props.info}</p>
                </div>
                <div>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    )
}