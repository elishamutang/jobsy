import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Load from localStorage or system preference
        const saved = localStorage.theme;
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;

        const initialTheme = saved || (prefersDark ? "dark" : "light");
        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
        document.documentElement.classList.add(initialTheme);
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.documentElement.setAttribute("data-theme", "dark"); // DaisyUI
            document.documentElement.classList.add("dark"); // TailwindCSS
            localStorage.theme = "dark";
        } else {
            setTheme("light");
            document.documentElement.setAttribute("data-theme", "light"); // DaisyUI
            document.documentElement.classList.add("light"); // TailwindCSS
            localStorage.theme = "light";
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
