import { Header, Body, Footer } from "~/componnent";
const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <Header></Header>
                {children}
                <Footer></Footer>
            </div>
        </>
    );
};
export default DefaultLayout;
