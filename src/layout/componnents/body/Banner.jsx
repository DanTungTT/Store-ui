import clsx from "clsx";
import useSlider from "~/hooks/projectHooks/useSlider";

import imgBanner from "~/assets/img/body/banner";
const Banner = ({ ...props }) => {
    const sliderImgs = imgBanner.slider;
    const { refUl, refWidthLi, currentIndex, handleIndex } = useSlider(sliderImgs);

    return (
        <>
            <section {...props}>
                <div className="grid grid-cols-3 gap-x-2">
                    <div className="col-span-3 md:col-span-2 relative overflow-hidden">
                        <ul ref={refUl} className="flex  transition-all ">
                            {sliderImgs.map((img, index) => (
                                <li ref={refWidthLi} key={index} className="min-w-full">
                                    <img src={img} />
                                </li>
                            ))}
                        </ul>
                        <ul className="absolute bottom-4 left-[50%] translate-x-[-50%] flex">
                            {sliderImgs.map((dot, index) => {
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
                    <div className="col-span-1 hidden md:block">
                        <ul className="flex flex-col col-span-1 gap-1">
                            {imgBanner.static.map((img, index) => (
                                <li key={index}>
                                    <img src={img} alt="" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
