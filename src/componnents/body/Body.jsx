import "./body.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
const Body = () => {
    return (
        <>
            <div className="body-wrapper grid grid-cols-12 gap-x-[2px]">
                <Sidebar></Sidebar>
                <Content></Content>
            </div>
        </>
    );
};
export default Body;
