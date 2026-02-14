import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { renderApp } from "@inertiaui/modal-react";
import Layout from "./Layouts/Layout";
import "../css/app.css";
import ShowJobLayout from "./Layouts/ShowJobLayout";
import CreateJobLayout from "./Layouts/CreateJobLayout";
import LoginOrRegisterLayout from "./Layouts/LoginOrRegisterLayout";
import EditJobLayout from "./Layouts/EditJobLayout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];

        if (name === "Jobs/Create") {
            page.default.layout = (page) => <CreateJobLayout children={page} />;
        } else if (name === "Jobs/Show") {
            page.default.layout = (page) => <ShowJobLayout children={page} />;
        } else if (name === "Login" || name === "Register") {
            page.default.layout = (page) => (
                <LoginOrRegisterLayout children={page} />
            );
        } else if (name === "Jobs/Edit") {
            page.default.layout = (page) => <EditJobLayout children={page} />;
        } else if (name !== "Landing") {
            page.default.layout = (page) => <Layout children={page} />;
        }

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(renderApp(App, props));
    },
    // Progress indicator
    progress: {
        color: "#165ad8",
        showSpinner: true,
    },
});
