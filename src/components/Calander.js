import React, { useState } from 'react';
import "./css/calander.css"

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const prevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
    };

    const nextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
    };

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={prevMonth}>&lt;</button>
                <div>{monthNames[date.getMonth()]} {date.getFullYear()}</div>
                <button onClick={nextMonth}>&gt;</button>
            </div>
            <div className="weekdays">
                {weekdays.map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>
            <div className="days">
                {[...Array(firstDayOfMonth).keys()].map((index) => (
                    <div className="empty" key={index}></div>
                ))}
                {[...Array(daysInMonth).keys()].map((day) => (
                    <div className="day" key={day}>
                        {day + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
