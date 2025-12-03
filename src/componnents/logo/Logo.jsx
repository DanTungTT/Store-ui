import LogoImg from "../../../public/LogoStore.jpg";
const Logo = () => {
    return (
        <>
            <div className="logo-container">
                <img className="w-[6rem] rounded-2xl" src={LogoImg} alt="logo Store" draggable={false} />
            </div>
        </>
    );
};
export default Logo;
