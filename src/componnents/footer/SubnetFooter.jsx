import { UseIcon } from "~/assets/icon";
import data from "./data";
import "./footer.css";

import { useLayoutContext } from "~/provider/LayoutProvider";
const SubnetFooter = () => {
    const { LayoutFooter } = useLayoutContext();

    let Footer = LayoutFooter;

    // if () Footer = infor.InforShopFooter;
    const [footerInfors, followingFooter, payFooter, qrFooter] = data;
    const footer1 = (
        <Footer className="informationFooter">
            <div className="grid grid-cols-5 gap-x-[2rem]">
                {footerInfors.map(({ title, list }, index) => {
                    return (
                        <div key={index}>
                            <h3>{title}</h3>
                            <ul>
                                {list.map(({ name, link }, index) => {
                                    return <li key={index}>{name}</li>;
                                })}
                            </ul>
                        </div>
                    );
                })}
                <div>
                    <h3>{followingFooter.title}</h3>
                    <ul>
                        {followingFooter.list.map(({ icon, link, name }, index) => {
                            return (
                                <li key={index}>
                                    <span>
                                        <UseIcon icon={icon} />
                                    </span>
                                    <span>{name}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="payFooter_Ship">
                    <div>
                        <h3>{payFooter.title1}</h3>
                        <ul>
                            {payFooter.list1.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#">
                                            <img src={link} alt="thanh toan" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3>{payFooter.title2}</h3>
                        <ul>
                            {payFooter.list2.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#">
                                            <img src={link} alt="van chuyen" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>{qrFooter.title}</h3>
                    <ul className="grid grid-cols-2 grid-rows-3">
                        <li className="qr row-span-3 flex items-center overflow-hidden">
                            <UseIcon icon={qrFooter.qr} className="text-[10rem]" />
                        </li>
                        {qrFooter.appDow.map(({ name, icon }, index) => {
                            return (
                                <li key={index}>
                                    <span>
                                        <UseIcon icon={icon} />
                                    </span>
                                    <span>{name}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </Footer>
    );

    return (
        <>
            {LayoutFooter ? (
                footer1
            ) : (
                <footer className="text-center text-[1.5rem]">© 2025 Shopee. Tất cả các quyền được bảo lưu.</footer>
            )}
        </>
    );
};
export default SubnetFooter;
