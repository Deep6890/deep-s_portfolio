
import React from "react"

export default function OrangeBgRotated({
    children,
    width = "60%",
    height = "55%",
    radius = "2vw",
    positionClass = " top-[0] left-[-5%]", // 👈 dynamic Tailwind class
}) {
    return (
        <div
            style={{ width, height, borderRadius: radius }}
            className={`border-2 shadow-md rotate-[-6deg] absolute ${positionClass}`}
        >
            {children}
        </div>
    )
}
