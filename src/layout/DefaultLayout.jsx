import { Header, Body, Footer } from "~/componnents";
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
