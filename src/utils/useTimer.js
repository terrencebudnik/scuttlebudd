import { useRef, useState, useEffect } from 'react';

function useTimer(initialTime) {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const intervalRef = useRef();

    const startTimer = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime === 0) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
    };

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, []);

    return { timeLeft, startTimer, stopTimer };
}

export default useTimer;