import { useRef, useState } from "react";
import { arrow, offset } from "@floating-ui/react";

import { useHoverFloating } from "~/hooks/floatingUi";
import { useAuthenContext } from "~/provider/AuthenProvider";
import { useNameContext } from "~/provider/NameProvider";
import FloatingBox from "~/componnents/floatingBox/FloatingBox";

import { UseIcon, faUserAstronaut, faRightFromBracket } from "~/assets/icon";

const Avatar = () => {
    const refArrow = useRef();
    const { logout, isAuthen } = useAuthenContext();

    const { open, refs, floatingStyles, getReferenceProps, getFloatingProps, middlewareData } = useHoverFloating({
        optionsFloating: {
            straytegy: "absolute",
            middleware: [offset({ mainAxis: 10, crossAxis: -50 }), arrow({ element: refArrow })],
        },
    });
    return (
        <>
            <div
                ref={refs.setReference}
                {...getReferenceProps()}
                className="bg-white rounded-[50%] w-[2.5rem] h-[2.5rem] flex items-center justify-center mx-10"
            >
                <UseIcon icon={faUserAstronaut} className=" text-black"></UseIcon>
            </div>
            {open && (
                <>
                    <div style={floatingStyles} ref={refs.setFloating}>
                        <FloatingBox {...getFloatingProps()} className="">
                            <div
                                ref={refArrow}
                                className="bg-white h-10 w-10 rotate-[45deg] z-[-1]"
                                style={{ position: "absolute", left: middlewareData.arrow?.x }}
                            ></div>
                            <div>
                                <div className="flex flex-col p-5 [&>span:hover]:text-[var(--primary-color-)]">
                                    <span className="text-[var(--primary-textColor-)]">
                                        Tài khoản: {isAuthen.text || isAuthen.number}
                                    </span>
                                    <span className="text-[var(--primary-textColor-)]">Xem chi tiết</span>
                                    <span className="text-[var(--primary-textColor-)]" onClick={logout}>
                                        <UseIcon icon={faRightFromBracket} className="mx-2" />
                                        Đăng xuất
                                    </span>
                                </div>
                            </div>
                        </FloatingBox>
                    </div>
                </>
            )}
        </>
    );
};

export default Avatar;
