import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faAngleUp, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import QrLogin from "./QrLogin";
import Input from "./Input";
const FormLogin = () => {
    return (
        <>
            <form className="formLogin w-[40rem]  shadow-[0rem_0rem_1rem_#ededed] p-[3rem] bg-[var(--formInput-color-)]">
                <div>
                    {/*  */}
                    <div className="flex justify-between my-6">
                        <div>
                            <h1 className="text-[2rem] ">Đăng nhập</h1>
                        </div>
                        <QrLogin />
                    </div>
                    <Input placeholder="Email/Số điện thoại/Tên đăng nhập" className="outline-none w-[100%]" />
                    <Input type="password" className="outline-none w-[100%]" placeholder="Nhập mật khẩu " />
                    <div>
                        <button className="text-[#fff] bg-[var(--primary-color-)] w-[100%] py-3 my-5 rounded">
                            ĐĂNG NHẬP
                        </button>
                    </div>
                    {/*  */}
                    <div className="my-4">
                        <a href="" className="text-blue-600 text-[1.1rem]">
                            Quên mật khẩu ?
                        </a>
                    </div>
                    {/*  */}
                    <div className="flex items-center justify-between">
                        <div className="h-[.1rem] w-[40%] bg-[#8a8888]"></div>
                        <p className="text-center text-[#c0c0c0]">Hoặc</p>
                        <div className="h-[.1rem] w-[40%] bg-[#8a8888]"></div>
                    </div>
                    {/*  */}
                    <div className="flex justify-between my-5">
                        <div className="w-[47%] border border-[#333] text-center py-3 rounded">
                            <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
                            <button>Facebook</button>
                        </div>
                        <div className="w-[47%] border border-[#333] text-center py-3 rounded">
                            <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                            <button>oogle</button>
                        </div>
                    </div>
                    {/*  */}
                    <div className="text-center pt-[3rem]">
                        <span className="text-[#b3b3b3]">Bạn mới biết tới SupperSeo? </span>
                        <a href="#" className="text-[var(--primary-color-)]">
                            Đăng ký
                        </a>
                    </div>
                    {/*  */}
                </div>
            </form>
        </>
    );
};
export default FormLogin;
