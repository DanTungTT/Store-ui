import styles from "../becomeASeller.module.css";
const Reson = ({ img, title, text }) => {
    return (
        <>
            <div className="item text-center py-3">
                <div className="img">
                    <img className="mx-auto" src={img} alt={`"${title}"`} />
                </div>
                <div className="text py-5">
                    <div>
                        <h1 className="font-semibold">{title}</h1>
                    </div>
                    <div className="py-5">
                        <p className={styles.textColor}>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Reson;
