import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function GitHubCalendarComponent() {
    const theme = {
        light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    return (
        <div
            style={{
                width: '100%',
                maxWidth: '100%',
                padding: '0',
                boxSizing: 'border-box',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                marginBottom: '34%',
            }}
        >
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1%' }}>
                My GitHub Contributions
            </h2>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: 'scale(0.9)',
                    transformOrigin: 'top center',
                }}
            >
                <GitHubCalendar
                    username="Deep6890"
                    blockSize={12.9}
                    blockMargin={3}
                    fontSize={12}
                    theme={theme}
                />
            </div>
        </div>
    );
}
