import { UseIcon, faBolt } from "~/assets/icon";
const VoucherFlashSale = ({ value }) => {
    return (
        <>
            <div className="absolute top-0 right-0 ">
                <span>
                    <UseIcon
                        icon={faBolt}
                        className="absolute -left-5 top-1/2 -translate-y-1/2  primaryColor rotate-[160deg] text-[1.8rem]"
                    />
                </span>
                <span className="bg-[#ffe97a] primaryColor rounded p-1 px-3">-{value}%</span>
            </div>
        </>
    );
};

export default VoucherFlashSale;
