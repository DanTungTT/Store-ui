import { forwardRef } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { useAuthenContext } from "~/provider/AuthenProvider";
import { Button } from "~/componnents/ui/";
import FloatingBox from "~/componnents/floatingBox/FloatingBox";

import { LoginToView } from "~/assets/img/header/Notification";

const NotificationFloating = forwardRef(({ refFloating, middlewareData, ...props }, ref) => {
    const { isAuthen } = useAuthenContext();
    const btnStyles = "w-[100%] hover:bg-white hover:text-[var(--primary-color-)] py-3";
    return (
        <>
            <FloatingBox {...props}>
                <div
                    ref={ref}
                    className="arrow w-20 h-20  bg-white rotate-[45deg] z-[-1]"
                    style={{ position: "absolute", left: middlewareData.arrow?.x }}
                ></div>

                {!isAuthen ? (
                    // not loggined in yet
                    <div className="h-[90%]">
                        <div className="h-full flex flex-col items-center justify-center ">
                            <img src={LoginToView} alt="dan nhap de xem" />
                            <h4 className="text-primaryColor">Đăng Nhập Để Xem Thông Báo</h4>
                        </div>
                        <div className="flex border border-[#e6e3e3]">
                            <Button title="Đăng ký" className={clsx(btnStyles, "btn-primary")} to="/register" />
                            <Button title="Đăng nhập" className={clsx(btnStyles, "btn-primary")} to="/login" />
                        </div>
                    </div>
                ) : (
                    // user loggined
                    <div className="flex flex-col h-full">
                        <div className="p-1 border-b border-[#c0bebe] flex-0">
                            <div className="headding bg-primary p-2">
                                <h5 className="text-[1.5rem]">Thông báo </h5>
                            </div>
                            <div className="flex justify-between [&>span]:text-white w-full [&>span]:m-1 [&>span]:cursor-pointer [&>span]:p-2 [&>span]:text-center">
                                <span className="flex-1 bg-primary">Tất cả</span>
                                <span className="flex-1 bg-primary">Chưa xem</span>
                                <span className="flex-1 bg-primary">Đã xem</span>
                            </div>
                        </div>
                        {/*  list noti  */}
                        <div className="flex-1 flex justify-center items-center">
                            <h3 className="text-primaryColor">Bạn chưa co thông báo</h3>
                        </div>
                        {/* footer noti */}
                        <div className="footer flex-0 [&>span]:p-3 [&>span]:cursor-pointer flex p-1">
                            <span className="flex-1 text-center bg-primary">Xem thêm</span>
                            <span className="flex-1 text-center bg-primary">Đánh dấu đã đọc</span>
                        </div>
                    </div>
                )}
            </FloatingBox>
        </>
    );
});

export default NotificationFloating;
