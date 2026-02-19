import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertCircle, Clock, TrendingDown } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
}

const painCards = [
    {
        Icon: AlertCircle,
        color: 'text-soft-red',
        bgColor: 'bg-soft-red/10',
        headline: "You're Losing High-Value Jobs",
        body: "Estate liquidation jobs average $5K–$15K. If your website looks outdated or unprofessional, families assume your service quality matches. You're losing 3–5 jobs per month to competitors with better sites.",
    },
    {
        Icon: Clock,
        color: 'text-royal-purple',
        bgColor: 'bg-royal-purple/10',
        headline: 'Slow Response = Lost Trust',
        body: "Families need help NOW. If they fill out your contact form at 8pm and don't hear back until tomorrow afternoon, they've already called someone else. Speed builds trust in emotional situations.",
    },
    {
        Icon: TrendingDown,
        color: 'text-emerald-green',
        bgColor: 'bg-emerald-green/10',
        headline: 'Your Referral Partners Judge You',
        body: "Realtors and estate attorneys refer clients to liquidators they trust. If your website looks sketchy, they won't risk their reputation by recommending you. A professional site = more B2B referrals.",
    },
]

export default function WhyThisMatters() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="why-this-matters" className="py-24 md:py-32 bg-off-white" ref={ref}>
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mb-6"
                >
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] text-dark-charcoal leading-tight">
                        Your Website Is Either Winning You $10K Jobs…
                        <br />
                        <span className="text-royal-purple">Or Losing Them.</span>
                    </h2>
                </motion.div>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center text-warm-grey text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
                >
                    Families dealing with estate liquidation are emotional, overwhelmed, and researching
                    companies online. They're comparing you to your competitors. And here's the truth:{' '}
                    <span className="text-dark-charcoal font-bold">
                        the company with the most professional, trustworthy website wins the job.
                    </span>
                </motion.p>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {painCards.map(({ Icon, color, bgColor, headline, body }) => (
                        <motion.div
                            key={headline}
                            variants={fadeUp}
                            className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(108,74,182,0.12)] transition-shadow duration-300 cursor-default"
                        >
                            <div className={`inline-flex items-center justify-center w-14 h-14 ${bgColor} rounded-xl mb-5`}>
                                <Icon className={`w-7 h-7 ${color}`} />
                            </div>
                            <h3 className="font-heading text-xl text-dark-charcoal mb-3">{headline}</h3>
                            <p className="text-warm-grey leading-relaxed">{body}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center mt-16 text-royal-purple text-xl md:text-2xl italic font-heading"
                >
                    What if you had a website that positioned you as the trusted expert — for free?
                </motion.p>
            </div>
        </section>
    )
}
