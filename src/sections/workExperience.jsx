import React from "react";

export default function BroadMindIdeas() {
    const ideas = [
        "Win hackathons and coding competitions",
        "Solve DSA and LeetCode challenges regularly",
        "Build innovative AI/ML and web projects",
        "Gain expertise in Artificial Intelligence & Machine Learning",
        "Contribute to impactful open-source projects",
        "Master frontend and full-stack development",
        "Stay updated with emerging technologies",
        "Work with talented peers and teams",
        "Teach, mentor, and share knowledge",
        "Explore GPU programming and high-performance computing",
        "Capture creativity through photography",
    ];



    const colors = [
        "text-Black"
    ];

    // Random helper functions for rotation and color
    const getRandomRotation = () => `${Math.floor(Math.random() * 21) - 10}deg`; // -10 to +10 deg
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
    const getRandomSize = () => {
        const sizes = ["text-sm", "text-lg", "text-2xl", "text-xl", "text-3xl"];
        return sizes[Math.floor(Math.random() * sizes.length)];
    };

    const fonts = [
        { family: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif', weight: '600' },
        { family: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', weight: '500' },
        { family: 'Helvetica Neue, Helvetica, Arial, sans-serif', weight: '300' },
        { family: 'Avenir Next, Avenir, sans-serif', weight: '600' },
        { family: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', weight: '400' },
        { family: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif', weight: '500' },
        { family: 'Poppins, -apple-system, BlinkMacSystemFont, sans-serif', weight: '600' },
        { family: 'Montserrat, -apple-system, BlinkMacSystemFont, sans-serif', weight: '500' },
        { family: 'Source Sans Pro, -apple-system, BlinkMacSystemFont, sans-serif', weight: '400' },
        { family: 'Lato, -apple-system, BlinkMacSystemFont, sans-serif', weight: '500' },
        { family: 'Open Sans, -apple-system, BlinkMacSystemFont, sans-serif', weight: '600' }
    ];

    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center gap-8 p-10">
            {ideas.map((idea, idx) => (
                <div
                    key={idx}
                    className={` shadow-xl cursor-default select-none ${getRandomSize()} ${getRandomColor()}`}
                    style={{
                        transform: `rotate(${getRandomRotation()})`,
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        borderRadius: "24px",
                        fontFamily: fonts[idx % fonts.length].family,
                        fontWeight: fonts[idx % fonts.length].weight,
                        padding: "14px 12px",
                        minHeight: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        lineHeight: "1",
                        letterSpacing: "0.02em",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                    title={idea}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg) scale(1.1)")}
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = `rotate(${getRandomRotation()}) scale(1)`)
                    }
                >
                    {idea}
                </div>
            ))}
        </div>
    );
}
