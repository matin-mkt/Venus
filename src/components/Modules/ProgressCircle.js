import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = () => {
    // const percentage = 100
    const[percentage, setSeconds] = useState(100)
    useEffect(() => {
        if (percentage > 0) {
            const interval = setInterval(() => {
                if (percentage === 0) {
                    clearInterval(interval);
                  }
                    setSeconds((prevState)=> prevState - 1)
            }, 1000);
        }
    },[])
    return (
        <div style={{width: "150px"}}>
            <CircularProgressbar styles={buildStyles({pathColor: "#f2c265", textColor:"#9dd562"})} value={percentage} text={`${percentage}%`} />
        </div>
    );
};

export default ProgressCircle;