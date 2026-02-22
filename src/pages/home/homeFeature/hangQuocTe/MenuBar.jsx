import { useEffect, useState } from "react";

import { menuBar } from "~/assets/img/body/homefeature/hang-quoc-te";

const MenuBar = () => {
    const [isActive, setIsActive] = useState(0);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index;
                        setIsActive(Number(index));
                    }
                });
            },
            { threshold: 0.8 },
        );

        sections.forEach((section) => observer.observe(section));
    }, []);
    return (
        <>
            <ul className="flex shadow-[0_0_4px_#333] p-5 bg-normal rounded-2xl">
                {menuBar.map((item, index) => (
                    <li key={item.id} onClick={() => setIsActive(index)}>
                        <a href={item.a}>
                            <img
                                src={isActive === index ? item.imgActive : item.imgNonActive}
                                draggable="false"
                                alt="menuBar"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MenuBar;
