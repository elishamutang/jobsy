import { useContext } from "react";
import { ThemeContext } from "../Hooks/useTheme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

export default function LightOrDarkModeToggle({ className }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <button
                onClick={toggleTheme}
                className={twMerge(
                    "self-start shadow-md py-2 px-3 rounded-lg btn cursor-pointer transition-all dark:bg-gray-800 dark:border-none dark:hover:bg-gray-700",
                    className,
                )}
            >
                {theme === "dark" ? (
                    <SunIcon className="size-6 text-gray-300 hover:fill-yellow-500" />
                ) : (
                    <MoonIcon className="size-6 text-gray-500 hover:fill-gray-500" />
                )}
            </button>
        </>
    );
}
