import Navbar from "./assets/navbar";
import { Outlet } from "react-router-dom";
const Rootlayout = () => {
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
   
}
export default Rootlayout