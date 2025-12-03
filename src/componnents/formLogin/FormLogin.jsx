import { Children, cloneElement, createRef, useRef } from "react";
import { faFacebook, faGoogle } from "~/assets/icon";
import clsx from "clsx";

import { Button } from "~/componnents/ui";
import QrLogin from "./QrLogin";

import styles from "./formLogin.module.css";

const FormLogin = ({ title, qr, children, clauseAndPolicy }) => {
    const inputRefs = useRef([]);
    const arrChildren = Children.map(children, (child, index) => {
        inputRefs.current[index] = createRef();
        return cloneElement(child, { ref: inputRefs.current[index] });
    });

    function handleSubmit(e) {
        e.preventDefault();
        inputRefs.current.map((el, index) => {
            const inputElement = el.current.getElement();
            el.current.validate(inputElement);
        });
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} className={clsx(styles.formLogin)}>
                <div>
                    {/*  */}
                    <div className="flex justify-between my-6">
                        <div>
                            <h1 className="text-[2rem] ">{title}</h1>
                        </div>
                        {qr && <QrLogin />}
                    </div>

                    {arrChildren}
                    <div>
                        <Button
                            type="primary"
                            title={title === "Đăng Nhập" ? "Đăng Nhập" : "Tiếp Theo"}
                            className="w-[100%] py-4 my-5"
                        />
                    </div>

                    {title === "Đăng Nhập" && (
                        <div className="my-4">
                            <a href="" className="text-blue-600 text-[1.1rem]">
                                Quên mật khẩu ?
                            </a>
                        </div>
                    )}
                    <div className="flex items-center justify-between my-5">
                        <div className="h-[.1rem] w-[40%] bg-[#8a8888]"></div>
                        <p className="text-center text-[#c0c0c0]">Hoặc</p>
                        <div className="h-[.1rem] w-[40%] bg-[#8a8888]"></div>
                    </div>

                    <div className="flex justify-between  my-5">
                        <Button
                            propsIcon={{ icon: faFacebook, className: "text-blue-500" }}
                            title="Facebook"
                            className="w-[90%] py-3"
                        />
                        <Button
                            propsIcon={{ icon: faGoogle, className: "text-red-500" }}
                            title="Facebook"
                            className="w-[90%] py-3"
                        />
                    </div>

                    {clauseAndPolicy && (
                        <div className="text-center pt-[2.6rem] text-[1.43rem]">
                            <span className="text-[var(--primary-textColor-)]">
                                Bằng việc đăng ký, bạn đã đồng ý với shoppe về
                            </span>
                            <a href="#" className="text-[var(--primary-color-)]">
                                <br /> Điều khoản dịch vụ
                            </a>
                            &
                            <a href="#" className="text-[var(--primary-color-)]">
                                Chính sách bảo mật
                            </a>
                        </div>
                    )}

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
