import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./globalStyle/GlobalStyle";
import App from "./App";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <GlobalStyle>
        <App />
    </GlobalStyle>,
    // </StrictMode>,
);
