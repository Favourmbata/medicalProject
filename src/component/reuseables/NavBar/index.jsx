import style from "./index.module.css"
import logo from "../../../asserts/home/logo.png"

const Navbar = () => {
    return (
        <div className={style.mainCont}>
            <p><span style={{color: "Red"}}>ALL</span>SMILES</p>

            <div className={style.linkCont}>
                <p>Home</p>
                <p>Page</p>
                <p>Staff</p>
                <p>Blog</p>
                <p>Shop</p>
                <p>Landing</p>
            </div>

            <div className={style.thirdSection}>
                <p>Search</p>
                <img src={logo} alt={"three lined image"}/>
            </div>

        </div>
    );
};
export default Navbar;