import {React,useState,useEffect} from "react";
import "../assets/css/Home.scss";
import emailjs from "emailjs-com";
import Pdf from "../pdfFolder/Meric_CHENU_CV.pdf";
import ErodeDashboard from "../assets/images/erode_dashboard.png";
import ErodeRegister from "../assets/images/erode_register.png";
import LogoErode from "../assets/images/logo_erode.png";
import LogoFap from "../assets/images/logo_fap.png";
import FapHome from "../assets/images/fap_home.png";
import FapContact from "../assets/images/fap_contact.png";
import LogoToDoList from "../assets/images/logo_todolist.png";
import ToDoListLogin from "../assets/images/todolistLogin.png";
import ToDoListDashboard from "../assets/images/dashboard_todolist.png";

import LogoNode from "../assets/images/logo_nodejs.png";
import LogoReact from "../assets/images/logo_react.png";
import LogoTailwind from "../assets/images/logo_tailwind.png";
import LogoFigma from "../assets/images/logo_figma.png";
import LogoVue from "../assets/images/vuejs_logo.png";

import { Link as LinkRouter,useLocation } from "react-router-dom" ;
import {Link, animateScroll as scroll } from "react-scroll";

function Home(){
   
    var [counterCaroussel,setCounterCaroussel] = useState([
        
        {"id": 0},
        {"id": 1},
    ]);
    
    const BigProjects = [{
        "title": LogoErode,
        "firstExample": ErodeRegister,
        "secondExample": ErodeDashboard,
        "date": "2022",
        "subtitle": "Erode",
        "description": "Une messagerie chiffrée de bout en bout",
        "frontBack": ["Back-End"],
        "techno": [LogoNode],
        "nameTechno": ["node"]
    },{
        "title": LogoFap,
        "firstExample": FapHome,
        "secondExample": FapContact,
        "date": "2022",
        "subtitle": "Fapefrei",
        "description": "site vitrine d'une association d'aide aux particuliers",
        "frontBack": ["Front-End"],
        "techno": [LogoReact,LogoTailwind,LogoFigma],
        "nameTechno": ["react","tailwind","figma"]

    },{
        "title": LogoToDoList,
        "firstExample": ToDoListLogin,
        "secondExample": ToDoListDashboard,
        "date": "2022",
        "subtitle": "ToDoList",
        "description": "site de gestion des tâches à réaliser",
        "frontBack": ["Front-End","Back-End"],
        "techno": [LogoVue,LogoNode],
        "nameTechno": ["vue","node"]

    }]
    const Certifications = [{
        "plateforme": "TryHackMe",
        "date": "(Juillet 2022)",
        "title": "Web Fundamentals Learning Path",
        "identifier": "THM-HYKVV64B8D",
        "url": "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-HYKVV64B8D.png",
        "img": require("../assets/images/logo_tryhackme.png"),
        "class": "tryhackme_logo"
    }, 
    {
        "plateforme": "TryHackMe",
        "date": "(Mai 2022)",
        "title": "Jr Penetration Tester Learning Path",
        "identifier": "THM-YFLD7I8AXV",
        "url": "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-YFLD7I8AXV.png",
        "img": require("../assets/images/logo_tryhackme.png"),
        "class": "tryhackme_logo"
    },
    {
        "plateforme": "TryHackMe",
        "date": "(Septembre 2022)",
        "title": "Introduction to Cyber Security",
        "identifier": "THM-QM45AQUCBE",
        "url": "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-QM45AQUCBE.png",
        "img": require("../assets/images/logo_tryhackme.png"),
        "class": "tryhackme_logo"
    },
    {
        "plateforme": "Microsoft",
        "date": "(Décembre 2022)",
        "title": "Notions de base de la sécurité, de la conformité et de l'identité Microsoft",
        "identifier": "MS0994240465",
        "url": null,
        "img": require("../assets/images/logo_microsoft.png"),
        "class": "microsoft_logo"
    }
]
    const studyCase = [{
        "title": "Erode",
        "description": "Une messagerie chiffrée de bout en bout",
        "published": null,
        "presentation": "Au cours d’un projet scolaire, nous devions chercher une solution mêlant chiffrement de bout-en-bout et développement. Après mure réflexion, nous nous sommes penchés sur le développement d’une application de messagerie web. Suite à une étude de marché, nous en sommes arrivés à la conclusion que peu de messagerie à destruction de message après sa lecture existait, mis à part whatsapp avec sa fonctionnalité de message éphémère. ",
        "resolution": "L’envoi de messages critiques, à l’instar de ceux transférant son numéro de carte bancaire, nécessite une pleine confiance concernant son interlocuteur et l’outil servant de transfert. Nombre sont les problèmes pouvant intervenir : Impression écran de la part de l’interlocuteur, mauvaise gestion des données dans la base de données, problème d’intégrité, de confidentialité",
        "solution": "Afin de résoudre la majorité de ces problèmes, nous avons développé notre propre messagerie, comprenant notre propre algorithme de chiffrement (appliqué sous une couche de RSA)"
    },
    {
        "title": "site fap efrei",
        "description": "Refonte de site web d'association",
        "published": null,
        "presentation": "Fap efrei est une association de formation aux particuliers sur des sujets informatiques tels que l’initiation à la programmation pour les plus jeunes, aider des séniors à effectuer leur démarche administrative sur le net, aider à la réinsertion professionnelle en dispensant des cours sur la création de CV, l’élaboration d’une lettre de motivation mais aussi les aider dans leurs démarches administratives, et enfin accompagner des personnes atteintes de légers handicaps afin qu’elle puisse être à l’aise avec l’utilisation d’internet. En tant que responsable technique, j’ai dû veiller à la refonte du site internet (design + développement) passant d’une version no-code, en une version développée en reactjs.",
        "resolution": "Au sein de l’association, nous avons relevé une difficulté chez nos collaborateurs lorsqu’une modification devait se faire sur le site web. En effet, celui-ci ayant été hébergé sur wordpress, très peu de collaborateurs étaient formés sur celui-ci. ",
        "solution": "De ce fait, il m’a été nécessaire de refaire le design (afin de rendre le site plus jeune), puis de passer de wordpress à reactjs."
    }
]
    const location = useLocation();
    useEffect(() => {
        console.log("location hash : ",location.hash)
        if(location.hash){
            let elem = document.getElementById(location.hash.slice(1));
            if(elem){
                elem.scrollIntoView({behavior: "smooth"});
            }
        }
        else{
            window.scrollTo({top: 0,left:0,behavior: "smooth"});
        }
    },[location,])
    const handleAddCounter = async e => {
        clearInterval(autoCaroussel);
        let counter =  counterCaroussel[0].id - 1;
        if(counter < 0){
            counter =Certifications.length-1; 
        }
        let firstItem = counterCaroussel[0].id;
        setCounterCaroussel([
            {
                "id": counter
            },
            {
                "id": firstItem
            }
        ])
       
    }
    const handleWithdrawCounter = async e => {
        clearInterval(autoCaroussel);
        let counter =  counterCaroussel[1].id + 1;
        if(counter >=Certifications.length){
            counter = 0; 
        }
        let secondItem = counterCaroussel[1].id;

        setCounterCaroussel([
            {
                "id": secondItem
            },
            {
                "id": counter
            }
        ])
    }
    var autoCaroussel = window.setInterval(function(){
        handleAddCounter();
    },5000) 
  
   function sendMail(e){
        console.log("test")
        e.preventDefault();
        emailjs.sendForm('service_lzmxcct','template_2nwcted',e.target,'ygoZETWTdSxCSNxcA')
        .then((result) => {
            console.log(result.text)
        },(error) => {
            console.log(error.text)
        })
   }
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
                        <p className="lato">Autodidacte de 21 ans, je suis passioné par le développement web et la cybersécurité
                        depuis 5 ans.</p>
                    </div>
                    <div id="containerButtonContact">
                        <Link className="lato contactLink" activeClass="active" smooth spy to="containerContact">
                            <div id="buttonContactMe">
                                <p className="lato">Me contacter</p>
                            </div>
                        </Link>
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
                <div id="containerBigProjects">
                    <h2 className="lato">Sélection de gros projets</h2>
                    <div id="displayBigProducts">
                        {BigProjects.map((bigProject, index) => (
                            <div className="bigProduct">
                                <div className="containerDisplayExample">
                                    <img src={bigProject.title}/>
                                    <img src={bigProject.secondExample}/>
                                    <img src={bigProject.firstExample}/>
                                    
                                </div>
                                <div className="descriptionProject">
                                    <p className="lato">{bigProject.date}</p>
                                    <p className="lato">{bigProject.subtitle}</p>
                                    <p className="lato">{bigProject.description}</p>
                                </div>
                                <div className="containerFrontBackStudy">
                                    <div className="containerReadStudy">
                                        <img src={require("../assets/images/book.png")} alt="logo book"/>
                                        <LinkRouter className="lato" to="/studyCase" state={{ project: studyCase[index]}}>Lire l'étude</LinkRouter>
                                    </div>
                                    <div className="containerFrontBack">
                                        {bigProject.frontBack.map((frontBack) => (
                                            <div className="FrontBack">
                                                <p className="lato">{frontBack}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="containerTechno">
                                    {bigProject.techno.map((techno,index) => (
                                        <img src={techno} className={bigProject.nameTechno[index]}/>
                                    ))}
                                </div>
                            </div>
                                
                        ))}
                    </div>
                </div>
                <div id="sideProjects">
                    <h2 className="lato">Projets annexes</h2>
                    <p className="lato">Ici, vous retrouverez une composition de projets, colaires aussi bien que personnels,
                    dans le domaine du web ou bien touchant à d'autres domaibes</p>
                    <div id="containerLinkSideProjects">
                        <p className="lato">Tous</p>
                        <p className="lato">Web</p>
                        <p className="lato">Jeux</p>
                        <p className="lato">Autres</p>
                    </div>
                </div>
                <div id="containerSkills">
                    <div id="titleSkills">
                        <hr/>
                        <h2 className="lato">Mes compétences</h2>
                    </div>
                    <div id="showSkills">
                        <div id="containerSkillsCircle">
                            <div id="containerSkillsFrontEnd">
                                <img src={require("../assets/images/circle_frontend.png")} alt="circle frontend"/>
                                <div className="lato">Front-End</div>
                            </div>
                            <div id="containerSkillsBackEnd">
                                <img src={require("../assets/images/circle_backend.png")} alt="circle backend"/>
                                <div className="lato">Back-End</div>
                            </div>
                        </div>
                        <div id="containerLabelSkills">
                            <div className="lato">Front-End</div>
                            <div className="lato">Back-End</div>
                        </div>
                    </div>
                    
                </div>
                <div id="containerSkillsCybersecurity">
                    <h2>Cybersécurité</h2>
                    <div id="containerSkillsWeb">
                        <div className="containerTitleSkills">
                            <img src={require("../assets/images/validate.png")}/>
                            <div id="titleWeb">
                                <p className="lato">Web</p>
                                <p className="lato">Capture the flag</p>
                            </div>
                        </div>
                        <img src={require("../assets/images/logo_burp-removebg-preview.png")}/>
                        <img src={require("../assets/images/logo_dvwa.png")}/>
                    </div>
                    <div id="containerSkillsNetwork">
                        <div className="containerTitleSkills">
                            <img src={require("../assets/images/validate.png")}/>
                            <p className="lato">Réseau</p>
                        </div>
                        <img src={require("../assets/images/kali_linux.png")}/>
                        <img src={require("../assets/images/logo_debian.png")}/>
                        <img src={require("../assets/images/logo_ubuntu.png")}/>
                        <img src={require("../assets/images/logo_metasploit.png")}/>
                    </div>
                    <div id="containerSkillsCTF">
                        <div className="containerTitleSkills">
                            <img src={require("../assets/images/validate.png")}/>
                            <p className="lato">Capture the flag</p>
                        </div>
                        <img src={require("../assets/images/score_rootme.png")}/>
                    </div>
                </div>
                <div id="containerLanguagesWorkWith">
                    <h2 className="lato">J'ai pu travailler avec</h2>
                    <div id="containerLanguagesWorkWithLogo">
                        <img src={require("../assets/images/logo_react.png")} alt="logo react"/>
                        <img src={require("../assets/images/vuejs_logo.png")} alt="logo vue"/>
                        <img src={require("../assets/images/logo_tailwind.png")} alt="logo tailwind"/>
                        <img src={require("../assets/images/logo_mysql.png")} alt="logo mysql"/>
                        <img src={require("../assets/images/logo_nodejs.png")} alt="logo nodejs"/>
                        <img src={require("../assets/images/logo_django.png")} alt="logo django"/>
                        <img src={require("../assets/images/logo_react_native.png")} alt="logo reactnative"/>
                        <img src={require("../assets/images/logo_C.png")} alt="logo c"/>
                        <img src={require("../assets/images/logo_python.png")} alt="logo python"/>
                        <img src={require("../assets/images/logo_java.png")} alt="logo java"/>
                    </div>
                </div>
                <div id="containerToolsWorkWith">
                    <h2 className="lato">J'utilise ces outils</h2>
                    <div id="containerToolsWorkWithLogo">
                        <img src={require("../assets/images/logo_figma.png")} alt="logo figma"/>
                        <img src={require("../assets/images/logo_github.png")} alt="logo github"/>
                        <img src={require("../assets/images/logo_trello.png")} alt="logo trello"/>
                        <img src={require("../assets/images/logo_git.png")} alt="logo git"/>
                    </div>
                </div>
                <div id="containerFormationExperiences">
                    <div id="containerFormation">
                        <h2 className="lato">Formation</h2>
                        <div id="containerFormationConcordia">
                            <p className="lato date">Février-Mai 2022 (4mois)</p>
                            <div>
                                <p className="lato">Montréal (Canada)</p>
                                <p className="lato">Semestre à l'étranger</p>
                            </div>
                            <div>
                                <img src={require("../assets/images/logo_concordia.png")} alt="logo concordia"/>
                                <p className="lato etablissement">Concordia University</p>
                            </div>
                        </div>
                        <div id="containerFormationEfrei">
                            <p className="lato date">2019-2024 (5ans)</p>
                            <div>
                                <p className="lato">Villejuif (94)</p>
                                <p className="lato">Diplôme d'ingénieur</p>
                            </div>
                            <div>
                                <img src={require("../assets/images/logo_efrei.png")} alt="logo efrei"/>
                                <p className="lato etablissement">Efrei Paris</p>
                            </div>
                            <div>
                                <p className="lato"><span>GPA: </span>3.53/4.0 (Grade ECTS: A)</p>
                            </div>
                            <div>
                                <p className="lato">vie associative</p>
                            </div>
                            <div>
                                <p className="lato">Formation informatique à des séniors et cours de révision aux examens 
                                à des camarades de promotion</p>
                            </div>
                        </div>
                        <div id="containerFormationBac">
                            <p className="lato date">2016-2019 (3 ans)</p>
                            <div>
                                <p className="lato">Reims (51)</p>
                                <p className="lato">Baccalauréat scientifique (spé. Mathématiques)</p>
                            </div>
                            <div>
                                <p className="lato etablissement">Lycée Jean Jaurès</p>
                            </div>
                            <div>
                                <p className="lato"><span>Mention:</span> Bien</p>
                            </div>
                        </div>
                    </div>
                    <div id="containerExperiences">
                        <h2 className="lato">Experiences</h2>
                        <div id="containerExperiencesSopra">
                            <div>
                                <p className="lato date">2022-2024 (2ans)</p>
                            </div>
                            <div>
                                <p className="lato">Paris La Défense</p>
                                <p className="lato">Alternance Réseaux sécurité</p>
                            </div>
                            <div>
                                <img src={require("../assets/images/logo_sopra.jpg")} alt="logo sopra steria"/>
                                <p className="lato etablissement">Sopra Steria</p>
                            </div>
                        </div>
                        <div id="containerExperiencesFapefrei">
                            <div>
                                <p className="lato date">2022-2023 (1 an)</p>
                            </div>
                            <div>
                                <p className="lato">Villejuif (94)</p>
                                <p className="lato">Responsable pôle technique</p>
                            </div>
                            <div>
                                <img src={require("../assets/images/logo_fap.png")} alt="logo fapefrei"/>
                                <p className="lato etablissement">Fapefrei</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="containerCertifications">
                    <h2 className="lato">Certifications</h2>
                    <div id="containerControllerCertifications">
                        <img src={require("../assets/images/left_arrow.png")} onClick={handleWithdrawCounter}/>
                        <img src={require("../assets/images/right_arrow.png")} onClick={handleAddCounter}/>
                    </div>
                    <div id="displayCertifications">
                        {counterCaroussel.map(indexCertifications => (
                            <div className="certification">
                                <a href={Certifications[parseInt(indexCertifications.id)].url} className="lato" target="_blank">
                                    <img src={Certifications[parseInt(indexCertifications.id)].img} className={Certifications[parseInt(indexCertifications.id)].class}/>
                                    <div>
                                        <div>
                                            <p className="lato">{Certifications[parseInt(indexCertifications.id)].plateforme}</p>
                                            <p className="lato">{Certifications[parseInt(indexCertifications.id)].date}</p>
                                        </div>
                                        <div>
                                            <p className="lato">{Certifications[parseInt(indexCertifications.id)].title}</p>
                                        </div>
                                        <div>
                                            <p className="lato">Identifiant : </p>
                                            <p className="lato">{Certifications[parseInt(indexCertifications.id)].identifier}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))} 
                    </div>
                </div>
                <div id="containerContact">
                    <h2 className="lato">Contactez-moi</h2>
                    <h3 className="lato">Envie de me présenter un projet ?</h3>
                    <form method="post" enctype="text/plain" onSubmit={sendMail}>
                        <div>
                            <input type="email" className="lato"  placeholder="Entrez votre mail" required/>
                            <textarea className="lato" placeholder="Entrez votre message" rows="3" required></textarea>
                            <input type="submit" value="Envoyer"/>
                        </div>
                    </form>
                </div>
            </div>
            <footer>
                <div>
                    <p className="lato">Ce site a été désigné et fait à la main par Méric Chenu et ne collecte aucune données. Vous retrouverez son code souce sur <span>Github</span>.</p>
                    <div>
                        <p className="lato">Développé avec </p>
                        <img src={require("../assets/images/logo_react.png")} alt="logo react native"/>
                    </div>
                    <p className="lato">©  Tous droits réservés Méric Chenu</p>
                </div>
            </footer>   
        </div>
        
    )
    
}


export default Home;