import { forwardRef, useImperativeHandle, useState, useRef } from "react";
import { UseIcon, faEye, faEyeSlash } from "~/assets/icon";

const Input = ({ type, id, text, hiddenPassword, placeholder, className, ...props }, ref) => {
    const [hiddenIcon, setHiddenIcon] = useState(true);
    const [errorInput, setErrorInput] = useState();
    const inputRef = useRef(null);

    const ipnutType = hiddenIcon ? type : "text";
    const iconType = hiddenIcon ? faEyeSlash : faEye;
    const handleCheck = (inputElement) => {
        const errorMassage =
            checkIpnut[inputElement.type] && checkIpnut[inputElement.type](inputElement.value, inputElement.minLength);
        setErrorInput(errorMassage);
    };
    const checkIpnut = {
        text(inputValue) {
            return inputValue.trim() === "" ? "Vui lòng không bỏ trống" : null;
        },
        password(inputValue, minLength) {
            return inputValue.trim().length < minLength ? "Vui lòng nhập đúng ký tự" : null;
        },
    };

    useImperativeHandle(ref, () => {
        return {
            validate(inputElement, min) {
                return handleCheck(inputElement, min);
            },
            getElement() {
                return inputRef.current;
            },
        };
    }, []);
    return (
        <>
            <div className="flex flex-col my-5 relative">
                <div
                    className={`flex border border-[#c7c7c7] p-3 my-5 rounded has-[input:focus]:shadow-[0rem_0rem_.2rem_#333]`}
                >
                    <input
                        id={id}
                        ref={inputRef}
                        className={className}
                        type={ipnutType}
                        placeholder={placeholder}
                        onBlur={(e) => handleCheck(e.target)}
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
                <span className="text-red-500 absolute bottom-[-1.7rem]">{errorInput}</span>
            </div>
        </>
    );
};
export default forwardRef(Input);
