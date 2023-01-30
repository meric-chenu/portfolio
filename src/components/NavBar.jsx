import React from "react";
import { Link as LinkRouter,useLocation } from "react-router-dom" ;
import {Link, animateScroll as scroll } from "react-scroll";
import "../assets/css/NavBar.scss";

function NavBar() {
  const location = useLocation();
  const pathname = location.pathname
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
      <div id="containerNav">
        <div id="ContainerDownloadCv">
          <span className="lato">Méric</span><span className="lato">Chenu</span>
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
                  <p className="lato">Accueil</p>
                  <p className="lato">A propos</p>
                  <p className="lato">Portfolio</p>
                  <p className="lato">Compétences</p>
                  <p className="lato">Formation</p>
                  <p className="lato">Contact</p>
                </div>
              </div>
            </div>
          </div>
          {pathname === "/" && <div id="menuComputer">
            <img src={require("../assets/images/home_icon.png")} alt="home icon" />
            <Link className="lato" activeClass="active" smooth spy to="mainContainerHome">Accueil</Link>
            <Link className="lato" activeClass="active" smooth spy to="containerAbout">A propos</Link>
            <Link className="lato" activeClass="active" smooth spy to="containerServices">Portfolio</Link>
            <Link className="lato" activeClass="active" smooth spy to="containerSkills">Compétences</Link>
            <Link className="lato" activeClass="active" smooth spy to="containerFormationExperiences">Formation</Link>
            <Link className="lato" activeClass="active" smooth spy to="containerContact">Contact</Link>
          </div>
          }
          {pathname !== "/" && <div id="menuComputer">
            <img src={require("../assets/images/home_icon.png")} alt="home icon" />
            <LinkRouter className="lato" activeClass="active" smooth spy to="/#mainContainerHome">Accueil</LinkRouter>
            <LinkRouter className="lato" activeClass="active" smooth spy to="/#containerAbout">A propos</LinkRouter>
            <LinkRouter className="lato" activeClass="active" smooth spy to="/#containerServices">Portfolio</LinkRouter>
            <LinkRouter className="lato" activeClass="active" smooth spy to="/#containerSkills">Compétences</LinkRouter>
            <LinkRouter className="lato" activeClass="active" smooth spy to="/#containerFormationExperiences">Formation</LinkRouter>
            <LinkRouter className="lato" activeClass="active" smooth spy to="/#containerContact">Contact</LinkRouter>
          </div>}
          
        </div>
        <div id="containerContactSocialMedia">
          <div id="containerEmail">
            <a href="mailto:meric.chenu@efrei.net?subject=Appel d'offre freelance">
              <p>Email : <span>meric.chenu@efrei.net</span></p>
            </a>
          </div>
          <div id="containerSocialMedia">
            <a href="https://www.linkedin.com/in/m%C3%A9ric-chenu" target="_blank" rel="noopener noreferrer">
              <img src={require("../assets/images/logo_linkedin.png")} alt="linkedin icon" />
            </a>
            <a href="https://github.com/meric-chenu" target="_blank" rel="noopener noreferrer">
              <img src={require("../assets/images/logo_github.png")} alt="github icon" />
            </a>
          </div>
        </div>
      </div>
  );
}

export default NavBar;
