"use client";

import { Next13ProgressBar } from "next13-progressbar";
import { ReactNode, Suspense } from "react";

function ProgressBarProvider({ children }: { children: ReactNode }) {
    return (
        <>
            <Suspense>
                <Next13ProgressBar height="2px" color="#0d9488" options={{ showSpinner: false }} showOnShallow />
            </Suspense>
            {children}
        </>
    );
}

export default ProgressBarProvider;