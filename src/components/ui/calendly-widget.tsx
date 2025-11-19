"use client";

import { useEffect } from "react";

export function CalendlyWidget() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget w-full h-[600px]"
            data-url="https://calendly.com/sumahospitalario/consultoria?hide_gdpr_banner=1"
        />
    );
}
