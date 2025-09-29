import React from 'react'

export default function FeatureCard({
    children,
    width = "50%",
    height = "15%",
    radius = "5vw",
    positionClass = "bottom-[25%] left-[3%]",
    bg = 'bg-[#242424]' // default position
}) {
    return (
        <div
            style={{ width, height, borderRadius: radius }}
            className={`${bg} shadow-md p-10 rotate-[-6deg] absolute rounded-5xl ${positionClass}`}
        >
            {children}
        </div>
    )
}
