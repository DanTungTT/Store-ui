import clsx from "clsx";
import { Button } from "~/componnents/ui";

const VoucherCard = ({ title, decr, label, used = null, disable, img }) => {
    return (
        <>
            <div className="flex h-[32rem] relative">
                {label && !disable && (
                    <span
                        className="absolute -right-4 top-7 shadow
                                     bg-secondary primaryColor
                                     p-3 text-[2rem] font-extrabold
                                     rounded-tl-3xl rounded-bl-3xl
                                     before:w-0 before:h-0 
                                     before:absolute before:right-0
                                    before:-bottom-5
              before:border-t-[1.1rem] before:border-t-[##ff9a86]
              before:border-r-[1.1rem] before:border-r-transparent"
                    >
                        x10
                    </span>
                )}
                <img src={img} alt="nhãn dán giới thiệu voucherXtra" />
                <div className="w-[27rem] border border-[#c4c4c4] rounded-tr-3xl rounded-br-3xl ">
                    <h2 className="text-[2.7rem] font-extrabold mt-6 p-5">{title}</h2>
                    <p className="text-[2rem]  px-7">{decr}</p>
                    {label && (
                        <span className="border-primary border primaryColor inline-block p-3 rounded-2xl ml-3 ">
                            Độc quyền - S Xử lí
                        </span>
                    )}
                    {used && !disable && <div className="ml-5 mt-2">Đã dùng {used}%</div>}
                    <Button
                        type="button"
                        className={clsx(
                            disable ? "bg-gray-500 mt-10" : "bg-primary mt-5",
                            "text-secondaryColor w-80 py-5 rounded-2xl",
                        )}
                        title={disable ? "Hết lượt sử dụng" : "Lưu"}
                    />
                    <div className="text-right p-5 mt-2">
                        <a href="#" className="block text-[2rem] text-blue-500">
                            Điều Kiện
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VoucherCard;
