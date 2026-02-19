import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function getDeadline() {
    const stored = localStorage.getItem('zoroflow-deadline')
    if (stored) {
        const date = new Date(stored)
        if (date > new Date()) return date
    }
    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 21)
    localStorage.setItem('zoroflow-deadline', deadline.toISOString())
    return deadline
}

function getTimeLeft(deadline) {
    const now = new Date()
    const diff = Math.max(0, deadline - now)
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    }
}

function TimeBlock({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <motion.span
                key={value}
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="block w-16 md:w-20 h-16 md:h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-3xl md:text-4xl font-bold text-white font-body"
            >
                {String(value).padStart(2, '0')}
            </motion.span>
            <span className="text-soft-lavender/60 text-xs uppercase tracking-widest mt-2">{label}</span>
        </div>
    )
}

export default function CountdownTimer() {
    const [deadline] = useState(getDeadline)
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(deadline))

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(deadline))
        }, 1000)
        return () => clearInterval(interval)
    }, [deadline])

    return (
        <div className="flex items-center justify-center gap-3 md:gap-5">
            <TimeBlock value={timeLeft.days} label="Days" />
            <span className="text-white/30 text-2xl font-bold mt-[-1.5rem]">:</span>
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <span className="text-white/30 text-2xl font-bold mt-[-1.5rem]">:</span>
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <span className="text-white/30 text-2xl font-bold mt-[-1.5rem]">:</span>
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>
    )
}
