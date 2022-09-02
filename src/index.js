import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./nav.js";
import Hero from "./hero.js";
import Card from "./card.js";
import swimmer from "./swimmer.png";
import './index.css';

function Main () {
    return(
        <div>
            <Navbar />
            <Hero
                img="./group.png"
                title= "Online Experiences"
                description= "Join unique interactive activities led by one-of-a-kind hosts—all without leaving home."
            />
            <Card
                image= {swimmer}
                rating= "5.0 (6) USA"
                info= "Life lessons with Katie Zaferes"
                price= "From $136 / person"
            />
        </div>
    )
}

ReactDOM.render(<Main />, document.getElementById("root"))