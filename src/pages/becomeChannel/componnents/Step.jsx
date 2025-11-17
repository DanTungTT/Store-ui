const Step = ({ step, title, text }) => {
    return (
        <>
            <div>
                <div className="order ">
                    <h1 className="text-[5.5rem] text-center">{step}</h1>
                </div>
                <div>
                    <h4 className="title text-center p-4">{title}</h4>
                    <p className="text-center text-[1.1rem] px-[4rem]">{text}</p>
                </div>
            </div>
        </>
    );
};
export default Step;
