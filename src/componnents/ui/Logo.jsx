import logo from "../../../public/logo.png";
const Logo = () => {
    return (
        <>
            <div className="logo-container  ">
                <img className="w-[5rem] rounded-2xl md:w-[5rem]" src={logo} alt="logo Store" draggable={false} />
            </div>
        </>
    );
};
export default Logo;
