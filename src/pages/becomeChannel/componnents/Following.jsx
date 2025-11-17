import clsx from "clsx";
import styles from "../becomeASeller.module.css";
const Following = ({ img, title, text }) => {
    return (
        <>
            <div>
                {/* img */}
                <div>
                    <img src={img} alt={title} className="mx-auto" />
                </div>
                {/* description */}
                <div>
                    <h3 className="title text-center text-[1.8rem] my-7">{title}</h3>
                    <p className={clsx(styles.headingColor, "text-center")}>{text} </p>
                </div>
            </div>
        </>
    );
};
export default Following;
