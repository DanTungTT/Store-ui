import Topbar from "./topbar/Topbar";
import MiddleHeader from "./middleHeader/MiddleHeader";
import styles from "./header.module.css";
const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles["header-wrapper"]}>
                    <div>
                        <div>
                            <Topbar />
                        </div>
                        {/* header middle */}
                        <div>
                            <MiddleHeader />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;
