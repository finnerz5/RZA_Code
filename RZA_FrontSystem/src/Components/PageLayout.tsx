import { Outlet } from "react-router-dom";
import NaviBar from "./NavBar";
import Footer from "./PageFooter";

function Layout(){
    return(
        <>
            <NaviBar/>
            <Outlet/>
            <Footer/>        
        </>
    )
}

export default Layout;