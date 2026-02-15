const Voucher = ({ value }) => {
    return (
        <>
            <div className="absolute top-0 right-0 ">
                <span className="bg-secondary primaryColor rounded p-1">-{value}%</span>
            </div>
        </>
    );
};

export default Voucher;
