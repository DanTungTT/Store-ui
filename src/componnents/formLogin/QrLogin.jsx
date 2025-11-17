import { UseIcon, faQrcode } from "~/assets/icon";
const QrLogin = ({ ...props }) => {
    return (
        <>
            <div className="qrLogin flex ">
                <div className="relative">
                    <p
                        className="absolute left-[-16rem] top-[-1.5rem] w-[16rem] text-[1.5rem] text-[#ffbf00] border-[#ffbf00] border-2 p-3 bg-[#fefaec]
                                            before:absolute
                                            before:right-[-2rem]
                                            before:top-[2.1rem]
                                            before:content-['']
                                            before:border-t-10
                                            before:border-t-transparent
                                            before:border-r-10
                                            before:border-r-transparent
                                            before:border-b-10
                                            before:border-b-transparent
                                            before:border-l-10
                                            before:border-l-[#ffbf00]
                                                                "
                    >
                        Đăng nhập bằng mã <br />
                        QR
                    </p>
                </div>
                <div className="relative ">
                    <span
                        className="
                                            before:absolute
                                            before:left-[.8rem]
                                            before:top-[1.1rem]
                                            before:content-[''] 
                                            before:border-l-20
                                            before:border-l-white
                                            before:border-b-20
                                            before:border-b-white
                                            before:border-t-20
                                            before:border-t-transparent
                                            before:border-r-20
                                            before:border-r-transparent
                                                    "
                    ></span>
                    <UseIcon icon={faQrcode} className="text-[4.5rem] text-[var(--primary-color-)] cursor-pointer" />
                </div>
            </div>
        </>
    );
};
export default QrLogin;
