import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function Line() {
    return (
        <>
            <div className='relative mb-16 text-center'>
                <h1 className='font-display text-6xl font-bold text-gray-800 mb-4 tracking-tight'>
                    <span className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent'>
                        Timeline
                    </span>
                    <span className='text-3xl font-light text-gray-400 ml-2'>& Milestones</span>
                </h1>
                <div className='flex items-center justify-center gap-4 mt-6'>
                    <div className='w-16 h-px bg-gradient-to-r from-transparent to-gray-300'></div>
                    <span className='font-mono text-sm text-gray-500 px-4'>JOURNEY PROGRESS</span>
                    <div className='w-16 h-px bg-gradient-to-l from-transparent to-gray-300'></div>
                </div>
            </div>
            <div className="flex w-full">
                <Timeline position="alternate">

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6">Started B.Tech AIML</Typography>
                            <Typography>Charusat — 2024 - Present</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6">Fundamentals of C/C++</Typography>
                            <Typography>Completed foundational programming </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6">Debugging Hackathon Winner</Typography>
                            <Typography>Focused on C++ & debugging — Aug 2025</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6">Markup Mania Winner</Typography>
                            <Typography>HTML, CSS & JS Hackathon — 26 Sept 2025</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6">Data Analysis</Typography>
                            <Typography>Began focusing on Python for analytics — Late 2025</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6">Backend Development</Typography>
                            <Typography>In future exploring Node.js & APIs — 2025</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        </TimelineContent>
                    </TimelineItem>

                </Timeline>
            </div>
        </>
    );
}
