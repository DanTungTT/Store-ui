import { HeaderDashboard, DashboardFooter } from "~/componnents";
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
