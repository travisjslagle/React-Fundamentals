import React, {useState, useEffect} from 'react';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}
const getTimeString2 = () => {
    const date2 = new Date(Date.now()).toLocaleTimeString('de-DE', {timeZone: 'Europe/Berlin'});
    return date2;
}
const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());
    const [time2, setTime2] = useState(getTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            let date2 = getTimeString2();
            setTime2(date2);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <h1 className="section-title">React Clock</h1>
            <div>Current Local Time is... {time}</div>
            <h1 className="section-title">Foreign React Clock</h1>
            <div>Wie spät es ist auf Deutschland... {time2}</div>
        </div>
    );
}

export default ClockApp;