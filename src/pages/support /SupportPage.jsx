import { SubnetLayout } from "~/layout";
import { InforDashboard } from "../friendChannel/FriendChannelPage";
const SupportPage = () => {
    const infor = {
        title: "Trung tập trợ giúp ShoppeeShopee VN",
        helper: "Seo Polices",
    };
    return (
        <>
            <InforDashboard value={infor}>
                <SubnetLayout>hiiii</SubnetLayout>
            </InforDashboard>
        </>
    );
};

export default SupportPage;
