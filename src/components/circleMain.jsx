import React from "react";

export default function Circle({
    children,
    width = "5vw", // default to viewport width
    height = "5vw", // default to viewport height
    positionClass = "left-[8%] top-[65.8%]",
    rotate = "0deg", // optional rotation
}) {
    // Validate units: allow only %, vw, vh
    const isValidUnit = (value) =>
        typeof value === "string" && /^(?:\d+(?:\.\d+)?)(%|vw|vh)$/.test(value);

    const safeWidth = isValidUnit(width) ? width : "10vw";
    const safeHeight = isValidUnit(height) ? height : "10vw";

    return (
        <div
            className={`bg-amber-50 flex items-center justify-center absolute ${positionClass}`}
            style={{
                width: safeWidth,
                height: safeHeight,
                borderRadius: "50%",
                transform: `rotate(${rotate})`,
                transformOrigin: "center",
            }}
        >
            {children}
        </div>
    );
}