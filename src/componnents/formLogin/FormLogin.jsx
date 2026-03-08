import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

import { useAuthenContext } from "~/provider/AuthenProvider";
import { validateField, validateForm } from "~/validation";
import { Button, Input } from "~/componnents/ui";
import { faFacebook, faGoogle } from "~/componnents/icon";

import QrLogin from "./QrLogin";
import styles from "./formLogin.module.css";

const schema = {
    text: ["isRequired"],
    password: ["isRequired", { minLength: 6 }],
    email: ["isRequired", "isEmail"],
    number: ["isRequired", "isNumber", { lengthInput: 10 }],
};

const FormLogin = ({ title, qr, inputs, clauseAndPolicy }) => {
    const { login } = useAuthenContext();
    const [form, setForm] = useState({
        text: "",
        password: "",
        email: "",
        number: "",
    });
    const [error, setError] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    // handle event onChange
    const handleChange = (input) => {
        setForm({ ...form, [input.name]: input.value });
    };

    // handle event onblur
    const handleBlur = (name) => {
        const errorMessage = validateField(name, form[name], schema[name]);
        if (errorMessage) {
            setError((prev) => ({ ...prev, [name]: errorMessage }));
            return;
        }
        setError((prev) => ({ ...prev, [name]: null }));
    };

    // handle  submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm(inputs, form, schema, setError);
        if (isFormValid) {
            Object.keys(form).map((key) => {
                if (form[key]) {
                    key === "text" && console.log("Tên tài khoản:", form[key]);
                    key === "password" && console.log("Mật khẩu :", form[key]);
                    key === "number" && console.log("Số điện thoại :", form[key]);
                    key === "email" && console.log("Email  :", form[key]);
                }
            });
            login(form);
        }
    };
    const facebook = useCallback(() => ({ icon: faFacebook, className: "text-blue-500" }), []);
    const google = useCallback(() => ({ icon: faGoogle, className: "text-red-500" }), []);

    useEffect(() => {
        for (const key of Object.keys(error)) {
            error[key] !== null ? setIsFormValid(false) : setIsFormValid(true);
        }
    }, [error]);

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} className={clsx(styles.formLogin)}>
                <div>
                    {/* title */}
                    <div className="flex justify-between my-1">
                        <div>
                            <h1 className="text-[2rem] ">{title}</h1>
                        </div>
                        {qr && <QrLogin />}
                    </div>

                    {/* inputs */}
                    {inputs.map(({ name, ...input }, index) => {
                        return (
                            <Input
                                key={index}
                                {...input}
                                name={name}
                                value={form?.[name]}
                                onChange={(e) => handleChange(e.target)}
                                onBlur={(e) => handleBlur(name, e.target.value)}
                                errorMessage={error[input.type]}
                            />
                        );
                    })}
                    {/* button login */}
                    <div>
                        <Button
                            title={title === "Đăng Nhập" ? "Đăng Nhập" : "Tiếp Theo"}
                            className="w-full py-4 my-5 btn-primary"
                        />
                    </div>

                    {/* help */}
                    {title === "Đăng Nhập" && (
                        <div className="my-4">
                            <a href="" className="text-blue-600 text-[1.1rem]">
                                Quên mật khẩu ?
                            </a>
                        </div>
                    )}
                    {/* another way */}
                    <div className="flex items-center justify-between my-5">
                        <div className="h-[.1rem] w-[40%] bg-[#8a8888]"></div>
                        <p className="text-center text-[#c0c0c0]">Hoặc</p>
                        <div className="h-[.1rem] w-[40%] bg-[#8a8888]"></div>
                    </div>

                    {/* Sign in using another platform */}
                    <div className="flex justify-between  my-5">
                        <Button
                            propsIcon={facebook}
                            title="Facebook"
                            className="w-[90%] py-3 btn-normal"
                            type="button"
                        />
                        <Button propsIcon={google} title="Google" className="w-[90%] py-3 btn-normal" type="button" />
                    </div>

                    {/* policy */}
                    {clauseAndPolicy && (
                        <div className="text-center pt-[2.6rem] text-[1.43rem]">
                            <span className="text-primaryColor">Bằng việc đăng ký, bạn đã đồng ý với Seo về</span>
                            <a href="#" className="primaryColor">
                                <br /> Điều khoản dịch vụ
                            </a>
                            &
                            <a href="#" className="primaryColor">
                                Chính sách bảo mật
                            </a>
                        </div>
                    )}

                    {/*  */}
                    <div className="text-center pt-[3rem]">
                        <span className="text-[#b3b3b3]">Bạn mới biết tới Seo? </span>
                        <a href="#" className="primaryColor">
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
