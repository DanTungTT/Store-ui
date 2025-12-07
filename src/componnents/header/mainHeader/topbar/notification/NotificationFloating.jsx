import { forwardRef } from "react";

import { Button } from "~/componnents/ui/";

import { LoginToView } from "~/assets/img/header/Notification";

const NotificationFloating = forwardRef(({ refFloating, middlewareData, style, ...props }, ref) => {
    const btnStyles =
        "text-[var(--primary-textColor-)] w-[100%]  hover:bg-white hover:text-[var(--primary-color-)] p-3";
    return (
        <>
            <div ref={refFloating} style={style} {...props}>
                <div
                    ref={ref}
                    className="arrow w-20 h-20  bg-white rotate-[45deg]"
                    style={{ position: "absolute", left: middlewareData.arrow?.x }}
                ></div>
                <div className="h-[90%] flex flex-col items-center justify-center ">
                    <img src={LoginToView} alt="dan nhap de xem" />
                    <h4 className="text-[var(--primary-textColor-)]">Đăng Nhập Để Xem Thông Báo</h4>
                </div>
                <div className="flex items-end border border-[#e6e3e3]">
                    <Button title="Đăng ký" type="primary" className={btnStyles} />
                    <Button title="Đăng nhập" type="primary" className={btnStyles} />
                </div>
            </div>
        </>
    );
});

export default NotificationFloating;
