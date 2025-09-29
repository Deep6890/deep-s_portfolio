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
