import React from 'react';

const Loading = () => (
    <section className="loading">
        <svg viewBox="0 0 100 100" style={{ width: "150px", height: "150px", margin: "0 auto" }}>
            <defs>
                <linearGradient id="Gradient" x1="50%" y1="0%" x2="50%" y2="100%" >
                    <stop offset="0%" stopColor="#c058f3">
                        <animate attributeName="stop-color" values="#c058f3; #57ddff; #c058f3" dur="4s" repeatCount="indefinite"></animate>
                    </stop>

                    <stop offset="100%" stopColor="#57ddff">
                        <animate attributeName="stop-color" values="#57ddff; #c058f3; #57ddff" dur="4s" repeatCount="indefinite"></animate>
                    </stop>
                </linearGradient>
            </defs>
            <circle className="circle" cx="50" cy="50" r="30" fill="none"></circle>
        </svg>
    </section>
);

export default Loading;