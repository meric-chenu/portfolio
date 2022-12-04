import React from "react";
import "../assets/css/Home.scss";
import Pdf from "../pdfFolder/Meric_CHENU_CV.pdf";
function Home(){
    return(
        <div id="mainContainer">
            <div id="mainContainerHome">
                <div id="containerDescription">
                    <div id="identity">
                        <h1 className="lato">Méric<br/>Chenu</h1>
                    </div>
                    <div id="role">
                        <span className="lato">D</span>
                        <span className="lato">é</span>
                        <span className="lato">v</span>
                        <span className="lato">e</span>
                        <span className="lato">l</span>
                        <span className="lato">o</span>
                        <span className="lato">p</span>
                        <span className="lato">p</span>
                        <span className="lato">e</span>
                        <span className="lato">u</span>
                        <span className="lato">r</span>
                        <span> </span>
                        <span className="lato">F</span>
                        <span className="lato">u</span>
                        <span className="lato">l</span>
                        <span className="lato">l</span>
                        <span> </span>
                        <span className="lato">S</span>
                        <span className="lato">t</span>
                        <span className="lato">a</span>
                        <span className="lato">c</span>
                        <span className="lato">k</span>
                        <span className="lato">.</span>                   
                    </div>
                    <div id="description">
                        <p className="lato">Autodidacte de 20 ans, je suis passioné par le développement web et la cybersécurité
                        depuis 5 ans.</p>
                    </div>
                    <div id="containerButtonContact">
                        <div id="buttonContactMe">
                            <p className="lato">Me contacter</p>
                        </div>
                        <div id="buttonGithub">
                            <a href="https://github.com/meric-chenu" target="_blank">
                                <img src={require("../assets/images/github.png")} alt="Logo github" />
                                <p className="lato">Github</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="containerImage3D">
                    <img src={require("../assets/images/specular.png")} alt="image 3D"/>
                </div>
            </div>
            <div id="mainContainerSecondPart">
                <div id="containerAbout">
                    <h2 className="lato">À propos</h2>
                    <div id="containerPictureDescription">
                        <div id="profilPicture">
                            <div>
                                <img src={require("../assets/images/photo_Meric.png")} alt="profil picture"/>
                            </div>
                        </div>
                        <div id="containerDescriptionAbout">
                            <div id="description">
                                <p className="lato">Je suis passionné par le développement web et la cybersécurité, me permettant d’associer bonnes pratiques de développement et sécurité des applications.
                                <br/><br/>Il m’est également important d’avoir l’avis du client tout au long du développement d’un projet, et pour cela, j’aime à travailler avec les méthodes Agile, telle que la méthode Scrum</p>
                            </div>
                            <div id="containerLocation">
                                <p className="lato"><span>Résidence : </span>France</p>
                                <p className="lato"><span>Adresse : </span>Villejuif</p>
                                <a className="lato" href="mailto:meric.chenu@efrei.net?subject=Appel d'offre freelance">
                                    <p className="lato"><span>Email : </span>meric.chenu@efrei.net</p>
                                </a>
                            </div>
                            <div id="containerDownloadCV">
                                <a href={Pdf} target="_blank">
                                    <p className="lato">Télécharger mon CV</p>
                                </a>
                            </div>
                        </div>
                        <div id="elipse">
                            <img src={require("../assets/images/elipse.png")} alt="picture elipse"/>
                        </div>
                    </div>
                </div>
                <div id="containerServices">
                    <h2 className="lato">Mes services</h2>
                    <div id="displayServices">
                        <div id="webdevelopmemt">
                            <img src={require("../assets/images/icon_webdev.png")} alt="logo developement web"/>
                            <p className="lato">Développement web</p>
                            <p className="lato">Développement front-end et back-end de sites web. Je convertis également les sites web déjà existant</p>
                        </div>
                        <div id="webSiteMaintenance">
                            <img src={require("../assets/images/icon_web-maintenance.png")} alt="logo web maintenance"/>
                            <p className="lato">Maintenance de sites web</p>
                            <p className="lato">Maintenance de sites web afin de corriger les bug ou bien apporter de nouvelles fonctionnalités</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;