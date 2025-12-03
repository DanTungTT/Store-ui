import { Button } from "~/componnents/ui";
import { UseIcon, faQrcode, faAppStore, faGooglePay } from "~/assets/icon";
const DownApp = ({ ref, style, ...pros }) => {
    return (
        <>
            <div
                ref={ref}
                style={style}
                {...pros}
                className="bg-white w-[19rem] rounded-2xl py-5 shadow-[0_0_.5rem_#333]"
            >
                <div className="mr-10">
                    <UseIcon icon={faQrcode} className="text-[15rem] text-[#333] " />
                </div>
                <div className="flex justify-evenly px-10">
                    <a href="https://www.apple.com/vn/app-store/" className="block text-black text-[1rem]">
                        <UseIcon icon={faAppStore} className="text-[1rem] text-[#333] " />
                        AppStore
                    </a>
                    <a href="https://play.google.com/store/games?hl=vi" className="block text-black text-[1rem]">
                        <UseIcon icon={faGooglePay} className="text-[1.5rem] text-orange-500" />
                        Google Play
                    </a>
                </div>
            </div>
        </>
    );
};

export default DownApp;
