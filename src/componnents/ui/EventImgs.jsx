const EventImgs = ({ imgList, w }) => {
    return (
        <>
            <div className="absolute bottom-0 left-0">
                <ul className="flex">
                    {Array.from(imgList).map((img, index) => {
                        return (
                            <li>
                                <img src={img} width={w} alt="ảnh mô tả sự kiện voucher" />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default EventImgs;
