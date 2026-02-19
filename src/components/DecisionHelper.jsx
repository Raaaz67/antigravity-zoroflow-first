import { motion, useInView } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const questions = [
    {
        question: 'How comfortable are you with technology?',
        options: [
            { label: 'Very comfortable (I fix my own computer)', diy: 2, full: 0 },
            { label: 'Somewhat comfortable (I can google solutions)', diy: 1, full: 1 },
            { label: "Not comfortable (I call someone for tech help)", diy: 0, full: 2 },
        ],
    },
    {
        question: 'How much time do you have for website maintenance?',
        options: [
            { label: 'I have 2–3 hours per month', diy: 2, full: 0 },
            { label: 'I have 30 minutes per month', diy: 0, full: 1 },
            { label: "I have zero time (I'm slammed with jobs)", diy: 0, full: 2 },
        ],
    },
    {
        question: "What's your time worth?",
        options: [
            { label: 'Under $50/hour', diy: 2, full: 0 },
            { label: '$50–100/hour', diy: 1, full: 1 },
            { label: 'Over $100/hour', diy: 0, full: 2 },
        ],
    },
]

const hints = [
    ['DIY is fine', 'DIY might work', 'Choose Full-Service'],
    ['DIY is possible', 'Full-Service recommended', 'Choose Full-Service'],
    ['DIY saves you money', 'Full-Service breaks even', 'Full-Service saves you money'],
]

export default function DecisionHelper() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [answers, setAnswers] = useState([null, null, null])

    const handleSelect = (qIndex, oIndex) => {
        setAnswers((prev) => {
            const next = [...prev]
            next[qIndex] = oIndex
            return next
        })
    }

    const recommendation = useMemo(() => {
        const answered = answers.filter((a) => a !== null).length
        if (answered < 3) return null
        let diy = 0
        let full = 0
        answers.forEach((a, qi) => {
            diy += questions[qi].options[a].diy
            full += questions[qi].options[a].full
        })
        return full > diy ? 'full' : diy > full ? 'diy' : 'either'
    }, [answers])

    // Calculator
    const hourlyRate = 75
    const hoursPerMonth = 2
    const diyOppCost = hourlyRate * hoursPerMonth
    const fullServiceCost = 97
    const savings = diyOppCost - fullServiceCost

    return (
        <section id="decision-helper" className="py-24 md:py-32 bg-soft-lavender/30" ref={ref}>
            <div className="max-w-3xl mx-auto px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl text-dark-charcoal mb-4">
                        Not Sure Which Hosting Option to Choose?
                    </h2>
                    <p className="font-heading text-xl text-royal-purple">Answer These 3 Questions:</p>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-8 mb-12">
                    {questions.map((q, qi) => (
                        <div key={qi} className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                            <p className="font-bold text-dark-charcoal mb-4">
                                <span className="text-royal-purple mr-2">Q{qi + 1}.</span>
                                {q.question}
                            </p>
                            <div className="space-y-2">
                                {q.options.map((opt, oi) => (
                                    <label
                                        key={oi}
                                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${answers[qi] === oi
                                                ? 'bg-royal-purple/10 border border-royal-purple/30'
                                                : 'bg-off-white hover:bg-soft-lavender/20 border border-transparent'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name={`q-${qi}`}
                                            checked={answers[qi] === oi}
                                            onChange={() => handleSelect(qi, oi)}
                                            className="sr-only"
                                        />
                                        <span
                                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${answers[qi] === oi ? 'border-royal-purple bg-royal-purple' : 'border-warm-grey'
                                                }`}
                                        >
                                            {answers[qi] === oi && <span className="w-2 h-2 rounded-full bg-white" />}
                                        </span>
                                        <span className="text-dark-charcoal/80 text-sm flex-1">{opt.label}</span>
                                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full transition-all duration-200 ${answers[qi] === oi ? 'bg-royal-purple text-white' : 'text-warm-grey'
                                            }`}>
                                            {answers[qi] === oi ? `→ ${hints[qi][oi]}` : ''}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Recommendation */}
                {recommendation && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`text-center p-6 rounded-2xl mb-12 ${recommendation === 'full'
                                ? 'bg-royal-purple text-white'
                                : recommendation === 'diy'
                                    ? 'bg-emerald-green text-white'
                                    : 'bg-white text-dark-charcoal border border-warm-grey/30'
                            }`}
                    >
                        <p className="text-lg font-bold mb-1">
                            {recommendation === 'full' && '🏆 Based on your answers: Full-Service ($97/mo) is your best fit'}
                            {recommendation === 'diy' && '💰 Based on your answers: DIY Hosting ($10–15/mo) is your best fit'}
                            {recommendation === 'either' && '⚖️ Either option works great for you!'}
                        </p>
                        <p className="text-sm opacity-80">
                            {recommendation === 'full' && 'You value your time and want zero hassle — Full-Service lets you focus on your business.'}
                            {recommendation === 'diy' && "You're tech-savvy and have the time to manage things yourself — save money with DIY."}
                            {recommendation === 'either' && "You're right in the middle. Both paths work — choose whichever feels right."}
                        </p>
                    </motion.div>
                )}

                {/* Calculator Widget */}
                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                        <h3 className="font-heading text-xl text-dark-charcoal mb-4 text-center">Quick Math</h3>
                        <p className="text-dark-charcoal/80 text-center leading-relaxed">
                            If you spend{' '}
                            <span className="font-bold text-dark-charcoal">{hoursPerMonth} hours/month</span>{' '}
                            managing DIY hosting and your time is worth{' '}
                            <span className="font-bold text-dark-charcoal">${hourlyRate}/hour</span>, that's{' '}
                            <span className="font-bold text-soft-red">${diyOppCost}/month</span> in opportunity
                            cost. Full-Service at{' '}
                            <span className="font-bold text-royal-purple">${fullServiceCost}/month</span> actually{' '}
                            <span className="font-bold text-emerald-green">SAVES you ${savings}/month</span>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
