"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }, [setTheme, resolvedTheme])


    return (
        <button type="button" onClick={toggleTheme} className="rounded-lg bg-teal-500/30 p-2 text-teal-500">
            <Sun className="block dark:hidden" />
            <Moon className="hidden dark:block" />
        </button>
    );
}

export default ThemeButton;