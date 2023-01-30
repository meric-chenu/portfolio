import {React} from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/StudyCase.scss"
function StudyCase(){
    const location = useLocation();
    const {project} = location.state;
    return( 
        <div id="mainContainerStudyCase">
            <h1>Study case</h1>
            <p>{project.title}</p>
            <p>{project.description}</p>
            <p>{project.published}</p>
            <p>{project.presentation}</p>
            <p>{project.resolution}</p>
            <p>{project.solution}</p>

        </div>
    )
}

export default StudyCase;