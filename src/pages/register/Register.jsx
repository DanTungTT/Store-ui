import { SubnetLayout } from "~/layout";
import { useLayoutContext } from "~/hooks/projectHooks/useLayoutContext";
import { FormLogin, Input } from "~/componnents";

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
    return (
        <>
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
                                <FormLogin title="Đăng Ký" clauseAndPolicy>
                                    <Input placeholder="Số điện thoại" className="outline-none" />
                                </FormLogin>
                            </div>
                        </div>
                    </main>
                </div>
            </SubnetLayout>
        </>
    );
};

export default Register;
