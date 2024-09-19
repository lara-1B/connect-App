import React from 'react';
import './ProgressBar.component.css'

const ProgressBar = ({ percentage }) => {
    const clampedPercentage = Math.max(0, Math.min(100, percentage));

    return (
        <div className='progress-bar-container'>
            <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${clampedPercentage}%` }}
                ></div>
            </div>
        </div>

    );
};

export default ProgressBar;
