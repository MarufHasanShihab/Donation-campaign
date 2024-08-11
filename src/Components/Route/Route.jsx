import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayouts/MainLayout";
import Home from "../../Pages/Home/Home";
import Donations from "../../Pages/Donations/Donations";
import Statistics from "../../Pages/Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('../../../public/data.json')
            },
            {
                path: "/donations",
                element: <Donations></Donations>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default router;