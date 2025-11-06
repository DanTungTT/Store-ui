import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp, faQrcode, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const UseIcon = ({ icon, ...props }) => {
    return <FontAwesomeIcon icon={icon} {...props} />;
};
export default UseIcon;
export { faFacebook, faInstagram, faGoogle, faAngleUp, faQrcode, faEye, faEyeSlash };
