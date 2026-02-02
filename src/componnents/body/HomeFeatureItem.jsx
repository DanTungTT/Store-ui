const HomeFeatureItem = ({ image, title }) => {
    return (
        <>
            <div>
                <div className="w-fit m-auto">
                    <img src={image} alt={title} width={50} />
                </div>
                <span>{title}</span>
            </div>
        </>
    );
};

export default HomeFeatureItem;
