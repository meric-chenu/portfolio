import Home from "../views/Home.js"
import Missing from "../views/Missing.js"
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
        }
    ]
}

export default MainRoutes;