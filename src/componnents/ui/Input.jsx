import { forwardRef, useEffect, useState } from "react";
import { UseIcon, faEye, faEyeSlash } from "~/assets/icon";

const Input = ({ type, id, hiddenPassword, placeholder, className, ...props }) => {
    const [hiddenIcon, setHiddenIcon] = useState(true);
    const [errorMessage, setErrorMassage] = useState(null);
    const ipnutType = hiddenIcon ? type : "text";
    const iconType = hiddenIcon ? faEyeSlash : faEye;
    const funcChecks = {
        text(inputValue) {
            return inputValue.trim() === "" ? "Trường này không được bỏ trống" : null;
        },
        password(inputValue, minLength) {
            return inputValue.trim() <= minLength ? "Vui lòng nhập đủ kí tự" : null;
        },
    };
    const handleBlur = (el) => {
        setErrorMassage(funcChecks[el.type](el.value, el.minLength));
    };
    return (
        <>
            <div className="flex flex-col my-11 relative">
                <div
                    className={`flex border ${errorMessage ? "border-red-500" : "border-[#c7c7c7]"}  p-3 my-5 rounded has-[input:focus]:shadow-[0rem_0rem_.2rem_#333]`}
                >
                    <input
                        id={id}
                        className={className}
                        type={ipnutType}
                        placeholder={placeholder}
                        onBlur={(e) => handleBlur(e.target)}
                        {...props}
                    />
                    {hiddenPassword && (
                        <div
                            onClick={() => setHiddenIcon(!hiddenIcon)}
                            className="cursor-pointer relative w-[2rem] flex items-center"
                        >
                            <UseIcon icon={iconType} className="absolute" />
                        </div>
                    )}
                </div>
                <span className="text-red-500 absolute bottom-[-1.7rem]">{errorMessage}</span>
            </div>
        </>
    );
};
export default Input;
