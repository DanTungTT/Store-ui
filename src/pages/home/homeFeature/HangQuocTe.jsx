import { useState } from "react";
import { DefaultLayout } from "~/layout";
import { menuBar } from "~/assets/img/body/homefeature/1";

const HangQuocTe = () => {
    const [isActive, setIsActive] = useState(0);
    return (
        <>
            <DefaultLayout>
                <div>
                    <ul className="flex">
                        {menuBar.map((item, index) => (
                            <li key={item.id} onClick={() => setIsActive(index)}>
                                <img
                                    src={isActive === index ? item.imgActive : item.imgNonActive}
                                    draggable="false"
                                    alt="menu"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </DefaultLayout>
        </>
    );
};

export default HangQuocTe;
