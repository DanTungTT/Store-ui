import clsx from "clsx";
const Following = ({ img, title, text, textColor }) => {
    return (
        <>
            <div>
                {/* img */}
                <div>
                    <img src={img} alt={title} className="mx-auto" />
                </div>
                {/* description */}
                <div>
                    <h3 className="title text-center text-[1.8rem] my-7">{title}</h3>
                    <p className={clsx(textColor, "text-center")}>{text} </p>
                </div>
            </div>
        </>
    );
};
export default Following;
