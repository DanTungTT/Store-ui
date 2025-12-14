import { useState, useRef, useLayoutEffect } from "react";
import NotificationSlideBanner from "./NotificationBanner";
import clsx from "clsx";

const listNoti = [
    { noti: "Tổng hợp mẹo mua sắm, đặt hàng Lễ 2/9. Xem ngay tại", link: true },

    {
        noti: "Từ 28/7, Shopee ngừng cung cấp phương thức vận chuyển Tiết kiệm và thay đổi giới hạn trọng lượng  một số kênh vận chuyển khác. Các đơn hàng đã mua vẫn được xử lý và giao đến bạn. Vui lòng chọn  các phương thức vận chuyển khác cho đơn hàng tiếp theo bạn nhé.",
    },
    {
        noti: "️Để tránh mất tiền vào tay kẻ lừa đảo mạo danh Shipper, bạn tuyệt đối: KHÔNG chuyển khoản trước khi chưa nhận hàng; KHÔNG nhấn vào đường Link lạ để tránh mắc bẫy lừa đảo nhé!. Chi tiết tại",
        link: true,
    },
    {
        noti: " Bạn ơi, tạm thời đừng đổi địa chỉ mới nha~ Shopee đang điều chỉnh và sẽ báo ngay khi xong! Hiện tại, mọi đơn hàng vẫn được xử lý bình thường với địa chỉ cũ, nên bạn cứ yên tâm nha! 💖",
    },
    {
        noti: "[Mua sắm an toàn] Không chia sẻ thông tin cá nhân: mật khẩu đăng nhập, mã OTP và mã PIN ví ShopeePay, ... với bất kỳ ai, kể cả nhân viên Shopee. Nếu tài khoản có dấu hiệu đăng nhập bất thường, hãy liên hệ Bộ Phận Chăm Sóc Khách Hàng Shopee. Tham khảo thêm Mua Sắm An Toàn tại",
        link: true,
    },
    {
        noti: " [Cảnh báo] Hãy thận trọng khi nhận được lời mời làm việc từ các đối tượng lừa đảo thông qua   tin nhắn, gọi điện, nhóm chat hoặc các trang Mạng xã hội. Nếu bạn nhận được tin nhắn đáng  ngờ, hãy thông báo ngay với Bộ phận CSKH qua tính năng Gọi tổng đài Shopee (miễn phí) trên  ứng dụng Shopee.",
        link: true,
    },
];

const NotificationBannerWrapper = ({ onRemoveNoti }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [diff, setDiff] = useState(0);

    const refWidthLi = useRef();
    const refUl = useRef();
    const handleMouseDown = (e) => {
        setDragging(true);
        setStartX(e.clientX);
    };
    const handleMouseMove = (e) => {
        if (!dragging) return;
        setDiff(e.clientX - startX);
        refUl.current.style.transform = `translate(${-refWidthLi.current.offsetWidth * currentIndex + diff}px)`;
    };
    const handleMouseUp = (e) => {
        if (dragging) {
            setDragging(false);
            diff < -1 && setCurrentIndex(currentIndex + 1);
            diff > 1 && setCurrentIndex(currentIndex - 1);
        }
    };
    const handleMouseLeave = () => {
        if (dragging) {
            setDragging((prev) => (prev = !prev));
            diff < -1 && setCurrentIndex(currentIndex + 1);
            diff > 1 && setCurrentIndex(currentIndex - 1);
        }
    };
    useLayoutEffect(() => {
        const autoSlide = setTimeout(() => {
            setDiff(NaN);
            setDragging(false);
            setCurrentIndex((prev) => prev + 1);
        }, 3000);

        const widthLi = refWidthLi.current.offsetWidth;
        refUl.current.style.transform = `translate(${-widthLi * currentIndex}px)`;
        currentIndex < 0 && setCurrentIndex(listNoti.length - 1);
        currentIndex > listNoti.length - 1 && setCurrentIndex(0);
        return () => clearTimeout(autoSlide);
    }, [currentIndex]);

    const handleIndex = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="relative h-[8rem]  mt-10  w-[100rem] mx-auto overflow-hidden">
                <ul
                    ref={refUl}
                    className="w-full transition-all   flex w-full h-[8.5rem]   [scrollbar-width:none] [-ms-overflow-style:none] [&::webkit-scrollbar]:hidden [&>li]:py-4 [&>li]:px-8"
                >
                    {listNoti.map((item, index) => {
                        return (
                            <li
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseLeave}
                                key={index}
                                ref={refWidthLi}
                                className="bg-[#fff8e4]  border border-[#ffe8b4] min-w-[100%] text-[1.3rem]  relative"
                            >
                                <NotificationSlideBanner {...item} onRemoveNoti={onRemoveNoti} />
                            </li>
                        );
                    })}
                </ul>
                {/* dots */}
                <ul className="absolute bottom-4 left-[50%] translate-x-[-50%] flex">
                    {listNoti.map((dot, index) => {
                        return (
                            <li
                                onClick={() => handleIndex(index)}
                                key={index}
                                className={clsx(
                                    currentIndex === index ? "bg-[#595750]" : "bg-[#e8e2cf]",
                                    " h-3 w-3 rounded-[50%] mx-1",
                                )}
                            ></li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default NotificationBannerWrapper;
