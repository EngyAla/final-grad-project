import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Font Awesome - Local backup
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
