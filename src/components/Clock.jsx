import React, { useEffect, useState } from 'react';
import moment from 'moment';
import MyButton from './UI/button/MyButton';

function Clock({ timeZone, remove, name }) {
    const [dateNow, setDate] = useState(updateClock());

    useEffect(() => {
        let interval;
        interval = window.setInterval(() => {
            setDate(updateClock())
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [dateNow])

    function updateClock() {
        const date = moment().utcOffset(Number(timeZone)),
            secondsDegree = date.seconds() * 6,
            minutesDegree = date.minutes() * 6 + secondsDegree / 60,
            hoursDegree = ((date.hour() % 12) / 12) * 360 + 90 + minutesDegree / 12;
        return { hoursDegree, minutesDegree, secondsDegree }
    }

    return (
        <div className="clock-wrapper">
            <div className='headerClock-wrapper'>
                <p>{name}</p>
                <MyButton onClick={remove}>X</MyButton>
            </div>
            <div className="hero-circle">
                <div className="hero-face">
                    <div style={{ transform: `rotate(${dateNow.hoursDegree}deg)` }} className="hero-hour"></div>
                    <div style={{ transform: `rotate(${dateNow.minutesDegree}deg)` }} className="hero-minute"></div>
                    <div style={{ transform: `rotate(${dateNow.secondsDegree}deg)` }} className="hero-second"></div>
                </div>
            </div >
        </div>
    );
}

export default Clock;