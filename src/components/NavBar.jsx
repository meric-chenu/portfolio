import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/NavBar.scss";

function NavBar() {
  const showMenuHamburger = () => {
    const menuHamburger = document.getElementById("menuHamburger");

    menuHamburger.classList.remove("hideMenuHamburger");
    menuHamburger.classList.remove("hiddenMenuHamburger");
    menuHamburger.className += "appearMenuHamburger ";

    

    
  };
  const hideMenuHamburger = () => {
    const menuHamburger = document.getElementById("menuHamburger");

    menuHamburger.classList.remove("appearMenuHamburger");
    menuHamburger.className += "hideMenuHamburger ";
    menuHamburger.className += "hiddenMenuHamburger ";

  };

  return (
    <div id="mainContainerNav">
      <div id="ContainerDownloadCv">
        <span className="roboto">Méric</span><span className="roboto">Chenu</span>
      </div>
      <div id="menu">
        <div id="navigationPhone">
          <button id="buttonHamburger" onClick={showMenuHamburger} >
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div id="menuHamburger" className="hiddenMenuHamburger">
              <button id="buttonClose" onClick={hideMenuHamburger}>
                <div>
                  <span></span>
                  <span></span>
                </div>
              </button>
              <div id="linkMenuHamburger">
                <p className="roboto">Accueil</p>
                <p className="roboto">A propos</p>
                <p className="roboto">Portfolio</p>
                <p className="roboto">Compétences</p>
                <p className="roboto">Formation</p>
                <p className="roboto">Contact</p>
              </div>
            </div>
          </div>
        </div>
        <div id="menuComputer">
          <img src={require("../assets/images/home_icon.png")} alt="home icon" />
          <p className="roboto">Accueil</p>
          <p className="roboto">A propos</p>
          <p className="roboto">Portfolio</p>
          <p className="roboto">Compétences</p>
          <p className="roboto">Formation</p>
          <p className="roboto">Contact</p>
        </div>
      </div>
          
  );
}

export default NavBar;
