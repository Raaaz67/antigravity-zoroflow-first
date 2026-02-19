import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
    visible: { transition: { staggerChildren: 0.12 } },
}

const testimonials = [
    { name: 'Estate Liquidation Company', location: 'Seattle' },
    { name: 'Estate Liquidation Company', location: 'Seattle' },
    { name: 'Estate Liquidation Company', location: 'Seattle' },
]

export default function SocialProof() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="social-proof" className="py-24 md:py-32 bg-off-white" ref={ref}>
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center mb-14">
                    <h2 className="font-heading text-3xl md:text-4xl text-warm-grey/50">
                        What Past Clients Say
                    </h2>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-3 gap-8 mb-12"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            className="border-2 border-dashed border-warm-grey/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[240px]"
                        >
                            <div className="w-16 h-16 rounded-full bg-warm-grey/10 flex items-center justify-center mb-5">
                                <User className="w-8 h-8 text-warm-grey/40" />
                            </div>
                            <p className="text-warm-grey/50 italic mb-4 text-sm">
                                "Coming soon — your testimonial could be here!"
                            </p>
                            <p className="text-warm-grey/40 text-xs font-medium">
                                — {t.name}, {t.location}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="text-center text-warm-grey italic text-sm max-w-lg mx-auto"
                >
                    I'm just getting started. These 10 spots are for building my first case studies. Your
                    results could be featured here.
                </motion.p>
            </div>
        </section>
    )
}
