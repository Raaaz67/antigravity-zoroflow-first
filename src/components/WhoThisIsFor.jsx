import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, X } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
    visible: { transition: { staggerChildren: 0.08 } },
}

const goodFit = [
    'Own an estate liquidation business in the Seattle area',
    'Currently have NO website or an outdated/DIY site',
    'Want to win more high-value jobs ($5K–$15K range)',
    'Can provide your content (logo, photos, service info) within 5 days',
    'Are willing to give an honest video testimonial after launch',
    'Can cover basic hosting costs (either $10–15/mo DIY or $97/mo full-service)',
]

const notFit = [
    'You expect completely free hosting forever (not realistic)',
    'You already have a modern, professional website',
    'You need e-commerce functionality (this is service-based only)',
    "You can't provide content or be responsive during the process",
    "You're not willing to be featured as a case study",
    "You're outside the Seattle area (for now — expanding soon)",
]

export default function WhoThisIsFor() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="who-this-is-for" className="py-24 md:py-32 bg-midnight-blue relative overflow-hidden" ref={ref}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-royal-purple/8 rounded-full blur-[150px]" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center mb-14">
                    <h2 className="font-heading text-3xl md:text-4xl text-white">
                        Is This Right <span className="text-soft-lavender">For You?</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Good Fit */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="bg-white/5 backdrop-blur-sm border border-emerald-green/20 rounded-2xl p-8"
                    >
                        <p className="text-emerald-green font-bold text-sm uppercase tracking-widest mb-6">
                            This FREE design offer is perfect if you:
                        </p>
                        <div className="space-y-4">
                            {goodFit.map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-emerald-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-emerald-green" />
                                    </span>
                                    <span className="text-white/85 text-sm leading-relaxed">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Not a Fit */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="bg-white/5 backdrop-blur-sm border border-soft-red/20 rounded-2xl p-8"
                    >
                        <p className="text-soft-red font-bold text-sm uppercase tracking-widest mb-6">
                            This is NOT a fit if:
                        </p>
                        <div className="space-y-4">
                            {notFit.map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-soft-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <X className="w-3.5 h-3.5 text-soft-red" />
                                    </span>
                                    <span className="text-white/65 text-sm leading-relaxed">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
