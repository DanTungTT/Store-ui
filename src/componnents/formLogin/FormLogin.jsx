import { faFacebook, faGoogle } from "~/assets/icon";
import QrLogin from "./QrLogin";
import "./formLogin.css";
import { Children } from "react";
const FormLogin = ({ title, qr, children }) => {
    console.log(Children);
    return (
        <>
            <form
                className="formLogin 
                             w-[var(--formLogin-width-)] 
                             text-[var(--formLogin-textColor-)] 
                             shadow-[0rem_0rem_1rem_#ededed] 
                             p-[3rem] 
                             bg-[var(--formLogin-bgColor-)]"
            >
                <div>
                    {/*  */}
                    <div className="flex justify-between my-6">
                        <div>
                            <h1 className="text-[2rem] ">{title}</h1>
                        </div>
                        {qr && <QrLogin />}
                    </div>
                    {children}
                    {/*  */}
                    <div className="text-center pt-[3rem]">
                        <span className="text-[#b3b3b3]">Bạn mới biết tới SupperSeo? </span>
                        <a href="#" className="text-[var(--primary-color-)]">
                            {title === "Đăng Nhập" ? "Đăng Ký" : "Đăng Nhập"}
                        </a>
                    </div>
                    {/*  */}
                </div>
            </form>
        </>
    );
};
export default FormLogin;
