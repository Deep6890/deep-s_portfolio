import React from 'react';
import MainCard from '../components/mainCard';
import RepoCard from '../components/repo';

export default function Projects() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10">
            <div className='relative mb-20 text-center'>
                <h1 className='font-display text-7xl font-bold text-gray-800 mb-4 tracking-tight'>
                    <span className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent'>
                        Projects
                    </span>
                    <span className='text-4xl font-light text-gray-400 ml-2'>& Ideas</span>
                </h1>
                <div className='flex items-center justify-center gap-4 mt-6'>
                    <div className='w-16 h-px bg-gradient-to-r from-transparent to-gray-300'></div>
                    <span className='font-mono text-sm text-gray-500 px-4'>CREATIVE SOLUTIONS</span>
                    <div className='w-16 h-px bg-gradient-to-l from-transparent to-gray-300'></div>
                </div>
            </div>
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
