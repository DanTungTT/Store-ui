
const validateField = (inputName, inputValue, rules = null) => {
            const checkRules = {
                isRequired() {
                    return inputValue.trim() === "" ? "Trường này bắt buộc" : null;
                },
                isEmail() {
                    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    return !regex.test(inputValue) ? "Trường này phải là Email" : null;
                },
                isNumber() {
                    return !Number(inputValue) || inputValue === "e" ? "Trường này phải là số điện thoại " : null;
                },
                isPassword() {
                    return inputValue.length < input.minLength ? "Trường này phải đủ kí tự" : null;
                },
                minLength(min) {
                    return inputValue.length < min ? `Trường này phải nhập đủ ${min} kí tự` : null;
                },
                lengthInput(value) {
                    return inputValue.length !== value ? `Trường này phải nhập ${value} kí tự` : null;
                },
            };
            for (const rule of rules) {
                if (typeof rule === "string") {
                    const errorMessage = checkRules[rule]();
                    if (errorMessage) return errorMessage;
                }
                if (typeof rule === "object") {
                    const key = Object.keys(rule)[0];
                    const errorMessage = checkRules?.[key](rule[key]);
                    if (errorMessage) return errorMessage;
                }
            }
            return null;
};
export default validateField;