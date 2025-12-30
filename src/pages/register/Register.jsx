import { SubnetLayout } from "~/layout";
import { useLayoutContext } from "~/provider/LayoutProvider";
import { FormLogin, Input } from "~/componnents";
import GuestRouter from "~/routers/GuestRouter";

import { useEffect } from "react";
const Register = () => {
    const { setTitleHeader, setTitleHelp, setLayoutFooter } = useLayoutContext();
    useEffect(() => {
        setTitleHeader("Đăng Ký");
        setTitleHelp("Bạn cần giúp đỡ?");
        setLayoutFooter("footer");
        return () => {
            setTitleHeader("");
            setTitleHelp("");
            setLayoutFooter("");
        };
    }, []);
    const inputs = [
        {
            id: "1",
            type: "number",
            name: "number",
            placeholder: "Số điện thoại",
        },
    ];
    return (
        <>
            <GuestRouter>
                <SubnetLayout>
                    <div className="bg-[#ee4d2d] min-h-[60rem]">
                        <main>
                            <div className="flex items-center justify-center w-full ">
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
                                    <FormLogin title="Đăng Ký" clauseAndPolicy inputs={inputs} />
                                </div>
                            </div>
                        </main>
                    </div>
                </SubnetLayout>
            </GuestRouter>
        </>
    );
};

export default Register;
