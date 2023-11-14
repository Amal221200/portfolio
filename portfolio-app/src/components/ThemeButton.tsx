"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    const toggleTheme = useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }, [setTheme, resolvedTheme])

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;

    return (
        <button type="button" onClick={toggleTheme} className="bg-teal-500/30 p-2 rounded-lg text-teal-500">
            {
                resolvedTheme === "dark" ?
                    (
                        <Sun />
                    ) : (
                        <Moon />
                    )
            }
        </button>
    );
}

export default ThemeButton;