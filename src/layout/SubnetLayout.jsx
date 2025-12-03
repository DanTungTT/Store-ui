import { SubnetHeader, SubnetFooter } from "~/componnents";
const SubnetLayout = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <SubnetHeader />
                {children}
                <SubnetFooter />
            </div>
        </>
    );
};
export default SubnetLayout;
