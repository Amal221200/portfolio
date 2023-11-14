"use client";
import { ThemeProvider } from "next-themes";

const Themes = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    );
}

export default Themes;