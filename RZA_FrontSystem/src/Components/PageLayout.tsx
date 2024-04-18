import { Outlet } from "react-router-dom";
import NaviBar from "./NavBar";
import Footer from "./PageFooter";

function Layout(){
    // a component that holds both the websites footer/ navbar and displays them accross all pages
    return(
        <>
            <NaviBar/>
            <Outlet/>
            <Footer/>        
        </>
    )
}

export default Layout;