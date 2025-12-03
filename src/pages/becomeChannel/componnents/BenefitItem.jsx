import clsx from "clsx";

import { Button } from "~/componnents/ui";

const BenefitItem = ({ img, type, name, description, list, textColor }) => {
    const bgBtns = {
        Cross: "bg-[#0046ab]",
        ShopeeCard: "bg-[#ee4d2d]",
        ShopeeMall: "bg-[#0046ab]",
    };
    return (
        <>
            <div className="w-[30rem] shadow-[0_0_.1rem_#333]">
                {/* img */}
                <div>
                    <img src={img} alt={name} />
                </div>
                {/* content */}
                <div>
                    <h4 className="text-[1.8rem] pt-10 pl-8 pb-6">{name}</h4>
                    <p className={clsx(textColor, "text-[1.3rem] pl-8 pr-10 pb-10 h-[5rem] mb-13")}>{description}</p>
                    <ul className="list-disc [&>li]:my-4 [&>li::marker]:text-orange-500 pl-15 pr-10 text-[1.2rem] min-h-[15.6rem]">
                        {list.map((item, index) => (
                            <li key={index} className={textColor}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Button
                        title="Đăng Ký Ngay"
                        className={`${bgBtns[type]} text-white  p-4 mr-55 my-10 border-none`}
                    />
                </div>
            </div>
        </>
    );
};
export default BenefitItem;
