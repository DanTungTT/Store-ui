import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter as RouteItems } from "./routes";
import AppProvider from "./provider/AppProvider";
import { useFetch } from "./services";
function App() {
    // const nameShop = useFetch("/shops");
    // nameShop.map((name) => console.log(name.shopName));
    return (
        <>
            <AppProvider>
                <Router>
                    <Routes>
                        {RouteItems.map((route, index) => {
                            const ElementRoute = route.element;
                            return <Route path={route.path} element={<ElementRoute />} />;
                        })}
                    </Routes>
                </Router>
            </AppProvider>
        </>
    );
}

export default App;
