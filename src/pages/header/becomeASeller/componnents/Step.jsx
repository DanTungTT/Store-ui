const Step = ({ step, title, text, ...props }) => {
    return (
        <>
            <div {...props}>
                <div className="order ">
                    <h1 className="text-[5.5rem] text-center">{step}</h1>
                </div>
                <div>
                    <h4 className="title text-center p-4">{title}</h4>
                    <p className="text-center text-[1.5rem] px-[4rem] sm:text-[1.1rem]">{text}</p>
                </div>
            </div>
        </>
    );
};
export default Step;
