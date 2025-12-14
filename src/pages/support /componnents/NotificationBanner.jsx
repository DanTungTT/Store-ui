import { UseIcon, faXmark } from "~/assets/icon";
const NotificationSlideBanner = ({ noti, link, onRemoveNoti }) => {
    return (
        <div className="flex px-5">
            <span>
                {noti}
                <a href="#" className="text-blue-500 ml-2">
                    {" "}
                    {link ? "Liên kết" : ""}
                </a>
            </span>
            <UseIcon icon={faXmark} className="absolute top-0 right-0 p-4" onClick={onRemoveNoti} />
        </div>
    );
};

export default NotificationSlideBanner;
