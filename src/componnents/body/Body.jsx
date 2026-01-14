import "./body.css";
import imgBanner from "~/assets/img/body/banner";
import Sidebar from "./Sidebar";
import Content from "./Content";
const Body = () => {
    return (
        <>
            <div className="body-wrapper grid grid-cols-12 gap-x-[2px]">
                {/* banner slider */}
                {/* <section className="container-xl col-span-12 mt-[3rem]">
                    <div className="grid grid-cols-3 gap-x-2 overflow-hidden">
                        <div className="col-span-2">
                            <ul className="flex col-span-2 overflow-hidden ">
                                {imgBanner.slider.map((img, index) => (
                                    <li key={index} className="min-w-full">
                                        <img src={img} className="" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <ul className="flex flex-col col-span-1 gap-1">
                                {imgBanner.static.map((img, index) => (
                                    <li key={index}>
                                        <img src={img} alt="" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section> */}
                {/* <Sidebar></Sidebar>
                <Content></Content> */}
            </div>
        </>
    );
};
export default Body;
