import facebookIcon from "../../../asserts/footer/icons/ (1).png"
import twitterIcon from "../../../asserts/footer/icons/ (1).png"
import youtubeIcon from "../../../asserts/footer/icons/ (1).png"
import instagramIcon from "../../../asserts/footer/icons/ (1).png"
import style from "./index.module.css"
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className={style.mainCont}>
            <div>
                <div>
                    <p>Start a conversation:</p>
                    <p>podcast@example.com +2 969 866 7033</p>
                </div>
                <p>Terms and Condition</p>
            </div>
            <div>
                <div>
                    <p>Find us here:</p>
                    <p>Brooklyn, NY 11201 United States</p>
                </div>
                <p>Privacy Policy</p>
            </div>
            <div>
                <div>
                    <p>Follow us on:</p>
                    <div className={style.socialIcon}>
                        <img src={facebookIcon} alt={"Facebook Icon"}/>
                        <img src={twitterIcon} alt={"Twitter Icon"}/>
                        <img src={youtubeIcon} alt={"Youtube Icon"}/>
                        <img src={instagramIcon} alt={"Instagram Icon"}/>
                    </div>
                </div>
                <p>&copy;{date} Qode Interactive. All Rights Reserved</p>
            </div>
        </div>
    );
};
export default Footer;