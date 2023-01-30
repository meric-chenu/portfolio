import Home from "../views/Home.js"
import Missing from "../views/Missing.js"
import StudyCase from "../views/StudyCase.js"
const MainRoutes = {
    path:"",
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "*",
            element: <Missing/>
        },
        {
            path: "studyCase",
            element: <StudyCase/>
        }
    ]
}

export default MainRoutes;