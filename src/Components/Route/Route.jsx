import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayouts/MainLayout";
import Home from "../../Pages/Home/Home";
import Donations from "../../Pages/Donations/Donations";
import Statistics from "../../Pages/Statistics/Statistics";
import DonationsDetails from "../../Pages/DonationsDetails/DonationsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/public/data.json')
            },
            {
                path: "/donations",
                element: <Donations></Donations>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/donationsDetails/:id",
                element: <DonationsDetails></DonationsDetails>,
                loader: ()=> fetch('/public/data.json')
            }
        ]
    }
])

export default router;