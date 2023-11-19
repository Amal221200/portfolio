"use client";

import { Next13ProgressBar } from "next13-progressbar";
import { ReactNode } from "react";

function ProgressBarProvider({ children }: { children: ReactNode }) {
    return (
        <>
            <Next13ProgressBar height="2px" color="#0d9488" options={{ showSpinner: false }} showOnShallow />
            {children}
        </>
    );
}

export default ProgressBarProvider;