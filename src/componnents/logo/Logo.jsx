import LogoImg from "../../../public/LogoStore.jpg";
const Logo = () => {
    return (
        <>
            <div className="logo-container  ">
                <img className="w-[5rem] rounded-2xl md:w-[5rem]" src={LogoImg} alt="logo Store" draggable={false} />
            </div>
        </>
    );
};
export default Logo;
