import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGoogle, faAppStore, faGooglePay } from "@fortawesome/free-brands-svg-icons";
import {
    faAngleUp,
    faAngleDown,
    faQrcode,
    faEye,
    faEyeSlash,
    faBell,
    faCircleQuestion,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const UseIcon = ({ icon, ...props }) => {
    return <FontAwesomeIcon icon={icon} {...props} />;
};
export default UseIcon;
export {
    faFacebook,
    faInstagram,
    faGoogle,
    faAngleUp,
    faQrcode,
    faEye,
    faEyeSlash,
    faAppStore,
    faGooglePay,
    faBell,
    faCircleQuestion,
    faGlobe,
    faAngleDown,
};
