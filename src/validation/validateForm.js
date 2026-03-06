import validateField from "./validateField";

const validateForm = (inputs, form, schema, setError) => {
        inputs.forEach((input) => {
            const errorMessage = validateField(input.name, form[input.name], schema[input.name]);
            if (errorMessage) {
                setError((prev) => ({ ...prev, [input.name]: errorMessage }));
                return;
            }
            setError((prev) => ({ ...prev, [input.name]: null }));
        });
};
export default validateForm