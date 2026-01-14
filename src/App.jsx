import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter as RouteItems } from "./routers";
import AppProvider from "./provider/AppProvider";
function App() {
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
