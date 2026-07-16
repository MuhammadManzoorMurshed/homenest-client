import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" :  "light"));
    };

    return (
        <button
        type="button"
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="btn btn-ghost btn-circle -mr-2.5 border border-teal-500 dark:border-teal-700 transition hover:bg-teal-50 dark:hover:bg-teal-900 hover:text-teal-700 dark:hover:text-teal-300 hover:scale-110"
        >
            {
                theme === "light" ? <MdDarkMode className="size-5 text-teal-700"/> : <MdLightMode className="size-5 text-teal-300"/>
            }
        </button>
    )
}

export default ThemeToggle;