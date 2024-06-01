import style from "./index.module.css"
import heroImg from "../../../../medical-practice-project/src/asserts/home/image.png"
import FilledButton from "../../../src/component/reuseables/FilledButton";
import OutlinedButton from "../../component/reuseables/OutlinedButton";
import{Link} from "react-router-dom";
import {Content} from "./data";

const Hero = () => {
    return (
        <div className={style.mainCont}>

            <div className={style.imageContainer}>
                <img src={heroImg} style={{width: "100%"}}/>
            </div>

            <div className={style.textDiv}>
                <p >Dental Practice</p>
                <p >We provide the best
                    <span
                        style={{display: "block"}}>services out there
                    </span>
                </p>
                <div className={style.buttonsContainer}>
                    <Link to={"https://www.youtube.com/"}>
                        <FilledButton color={"#2E3192"} text={"View More"} textColor={"#FFF"}/>
                    </Link>
                    <Link to={"https://music.youtube.com/ "}>
                        <FilledButton color={"#FFA"} text={"Purchase"} textColor={"#2E3192"}/>
                    </Link>
                    <OutlinedButton borderColor={"#2E3192"} textColor={"#2E3192"} text={"OutLined"}/>
                    <OutlinedButton borderColor={"#808080"} textColor={"#808080"} text={"David"}/>
                </div>

                <div className={style.contentContainer}>
                    {
                        Content.map((items, index) => {
                            return (
                                <div key={index}>
                                    <img src={items.image} alt={""}/>
                                    <h2 style={{color: "blue"}}>{items.title}</h2>
                                    <h4>{items.role}</h4>
                                </div>

                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}
export default Hero;