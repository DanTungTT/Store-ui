import { useEffect } from "react";

import { SubnetLayout } from "~/layout";
import { FormLogin, Input } from "~/componnents";
import { useLayoutContext } from "~/provider/LayoutProvider";
import GuestRouter from "~/routers/GuestRouter";

const Login = () => {
    const { setTitleHeader, setTitleHelp, setLayoutFooter } = useLayoutContext();
    useEffect(() => {
        setTitleHeader("Đăng Nhập");
        setTitleHelp("Bạn cần giúp đỡ");
        setLayoutFooter("footer");
        return () => {
            setLayoutFooter("");
            setTitleHeader("");
            setTitleHelp("");
        };
    }, []);
    const inputs = [
        {
            id: "1",
            placeholder: "Email/Số điện thoại/Tên đăng nhập",
            type: "text",
            name: "text",
        },
        {
            id: "2",
            placeholder: "Mật Khẩu",
            type: "password",
            name: "password",
        },
    ];
    return (
        <>
            <GuestRouter>
                <SubnetLayout>
                    <div className="bg-[#ee4d2d] min-h-[60rem]">
                        <main>
                            <div className="flex items-center justify-center w-full pt-5">
                                {/* img */}
                                <div
                                    style={{
                                        backgroundImage: "url(/src/assets/img/header/register_login/img.png)",
                                        backgroundRepeat: "no-repeat",
                                        paddingTop: "30%",
                                        boxSizing: "border-box",
                                    }}
                                    className="w-1/3"
                                ></div>
                                {/* form */}
                                <div>
                                    <FormLogin title="Đăng Nhập" qr inputs={inputs} />
                                </div>
                            </div>
                        </main>
                    </div>
                </SubnetLayout>
            </GuestRouter>
        </>
    );
};
export default Login;
