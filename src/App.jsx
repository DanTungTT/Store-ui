import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter as RouteItems } from "./routers";
function App() {
    // const api = "https://api.escuelajs.co/api/v1/products";
    // fetch(api)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));

    return (
        <>
            {/* <Home></Home> */}
            <Router>
                <Routes>
                    {RouteItems.map((route, index) => {
                        const ElementRoute = route.element;
                        return <Route path={route.path} element={<ElementRoute />} />;
                    })}
                </Routes>
            </Router>
        </>
    );
}

export default App;
