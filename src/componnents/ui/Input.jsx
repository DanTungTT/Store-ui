import { useState } from "react";
import { UseIcon, faEye, faEyeSlash } from "~/assets/icon";

const Input = ({ type, setIcon, errorMessage, ...props }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const ipnutType = isPasswordVisible ? type : "text";
    const iconType = isPasswordVisible ? faEyeSlash : faEye;

    return (
        <>
            <div className="flex flex-col my-5 relative">
                <div
                    className={`flex border border-[#c7c7c7] p-3 my-5 rounded has-[input:focus]:shadow-[0rem_0rem_.2rem_#333]`}
                >
                    <input type={ipnutType} {...props} className="flex-1 outline-none" />
                    {type === "password" && (
                        <div
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            className="cursor-pointer relative w-[2rem] flex items-center"
                        >
                            <UseIcon icon={iconType} className="absolute" />
                        </div>
                    )}
                </div>
                {errorMessage && <span className="text-red-500 absolute bottom-[-1.7rem]">{errorMessage}</span>}
            </div>
        </>
    );
};
export default Input;
