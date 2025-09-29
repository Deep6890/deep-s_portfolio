import React from 'react';

export default function Oval({
    width = '30%',        // default 50% of parent
    height = '50%',       // default 30% of parent
    borderWidth = '2px',
    borderColor = 'black',
    children
}) {
    return (
        <div
            style={{
                width,
                height,
                border: `${borderWidth} solid ${borderColor}`,
                borderRadius: '50%',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
            }}
        >
            {children}
        </div>
    );
}
