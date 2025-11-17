import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2025-11-20') - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                min: Math.floor((difference / 1000 / 60) % 60),
                seg: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { dias: 0, horas: 0, min: 0, seg: 0 };
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    return (
        <div className="bg-yellow-400/90 border-4 border-white/50 rounded-2xl p-4 shadow-lg mb-6">
            <p className="text-center text-sm font-bold text-red-800 mb-2">PROMOÇÃO TERMINA EM</p>
            <div className="grid grid-cols-4 gap-2 text-center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="bg-white rounded-lg p-2">
                        <div className="text-2xl font-bold text-red-700">{String(value).padStart(2, '0')}</div>
                        <div className="text-xs text-red-600 uppercase">{unit}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countdown;