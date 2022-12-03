import React from "react";
import "../assets/css/Home.scss";

function Home(){
    return(
        <div id="mainContainerHome">
            <div id="containerDescription">
                <div id="identity">
                    <h1 className="roboto">Méric<br/>Chenu</h1>
                </div>
                <div id="role">
                    <span className="roboto">D</span>
                    <span className="roboto">é</span>
                    <span className="roboto">v</span>
                    <span className="roboto">e</span>
                    <span className="roboto">l</span>
                    <span className="roboto">o</span>
                    <span className="roboto">p</span>
                    <span className="roboto">p</span>
                    <span className="roboto">e</span>
                    <span className="roboto">u</span>
                    <span className="roboto">r</span>
                    <span> </span>
                    <span className="roboto">F</span>
                    <span className="roboto">u</span>
                    <span className="roboto">l</span>
                    <span className="roboto">l</span>
                    <span> </span>
                    <span className="roboto">S</span>
                    <span className="roboto">t</span>
                    <span className="roboto">a</span>
                    <span className="roboto">c</span>
                    <span className="roboto">k</span>
                    <span className="roboto">.</span>                   
                </div>
                <div id="description">
                    <p className="roboto">Autodidacte de 20 ans, je suis passioné par le développement web et la cybersécurité
                    depuis 5 ans.</p>
                </div>
                <div id="containerButtonContact">
                    <div id="buttonContactMe">
                        <p className="roboto">Me contacter</p>
                    </div>
                    <div id="buttonGithub">
                        <img src={require("../assets/images/github.png")} alt="Logo github" />
                        <p className="roboto">Github</p>
                    </div>
                </div>
            </div>
            <div id="containerImage3D">
                <img src={require("../assets/images/specular.png")} alt="image 3D"/>
            </div>
        </div>
    )
}


export default Home;