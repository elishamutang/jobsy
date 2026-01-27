import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { renderApp } from "@inertiaui/modal-react";
import Layout from "./Layouts/Layout";
import "../css/app.css";
import ShowJobLayout from "./Layouts/ShowJobLayout";
import CreateJobLayout from "./Layouts/CreateJobLayout";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];

        if (name === "Jobs/Create") {
            page.default.layout = (page) => <CreateJobLayout children={page} />;
        } else if (name === "Jobs/Show") {
            page.default.layout = (page) => <ShowJobLayout children={page} />;
        } else {
            page.default.layout = (page) => <Layout children={page} />;
        }

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(renderApp(App, props));
    },
    // Progress indicator
    progress: {
        color: "#fff",
        showSpinner: true,
    },
});
