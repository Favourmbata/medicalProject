import Navbar from "../reuseables/NavBar"
import {Outlet} from "react-router-dom";
import Footer from "../reuseables/Footer";
const  Layout = ()=>{
    return(
        <>
              <Navbar/>

            <Outlet/>
            <Footer/>

        </>
    );
}

export default Layout;