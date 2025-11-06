import { HeaderDashboard, DashboardFooter } from "~/componnent";
const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderDashboard />
                {children}
                <DashboardFooter />
            </div>
        </>
    );
};
export default DashboardLayout;
