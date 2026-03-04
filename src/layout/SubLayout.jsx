import { SubHeader, SubFooter } from "./componnents";
const SubLayout = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <SubHeader />
                {children}
                <SubFooter />
            </div>
        </>
    );
};
export default SubLayout;
