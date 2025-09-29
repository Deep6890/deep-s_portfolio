import React from 'react';
import MainCard from '../components/mainCard';
import RepoCard from '../components/repo';

export default function Projects() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center  px-4 py-10">
            <h2 className="text-4xl font-bold text-center mb-20">Featured Project</h2>
            <MainCard width="46%" height="auto" positionClass="relative bottom  -[0%] left-[0%]">
                <div className="p-8 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-semibold mb-4 text-center">CmDZeN 🚀</h3>
                    <p className="text-lg text-gray-700 text-center">
                        Revolutionary Desktop Productivity & Coding Platform<br /><br />
                        A platform for developer productivity, coding, intelligent activity tracking, focus management, gamification, and competitive coding. Cross-platform for Windows, macOS, and Linux.<br />Privacy-first and powered by AI.
                    </p>
                </div>
            </MainCard>
            <RepoCard />
        </div>
    );
}
