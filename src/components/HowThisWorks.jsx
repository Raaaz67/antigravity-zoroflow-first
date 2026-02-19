import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Phone, Server, FolderOpen, Rocket } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const steps = [
    {
        Icon: FileText,
        title: 'Apply',
        time: '2 minutes',
        desc: "Fill out the short application below. I'll review within 24 hours.",
    },
    {
        Icon: Phone,
        title: 'Quick Call',
        time: '15 minutes',
        desc: "If you're a fit, we'll hop on a quick call to discuss your vision and choose your hosting option.",
    },
    {
        Icon: Server,
        title: 'You Set Up Hosting',
        time: 'DIY Option Only',
        desc: "If you chose DIY hosting, you'll purchase hosting ($10–15/month) and give us access. If you chose Full-Service, skip this — we handle it.",
    },
    {
        Icon: FolderOpen,
        title: 'You Provide Content',
        time: '1–2 days',
        desc: 'Send me your logo, photos, service descriptions, and any specific requests.',
    },
    {
        Icon: Rocket,
        title: 'We Build + Launch',
        time: '10–14 days',
        desc: "I'll design your site, get your feedback, make revisions, and launch. You own everything.",
    },
]

export default function HowThisWorks() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="how-this-works" className="py-24 md:py-32 bg-off-white" ref={ref}>
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl text-dark-charcoal mb-3">
                        How This Works — <span className="text-royal-purple">Simple 5-Step Process</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical connecting line (mobile) / horizontal (desktop) */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-royal-purple/20 via-royal-purple to-royal-purple/20" />
                    <div className="md:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-royal-purple/20 via-royal-purple to-royal-purple/20" />

                    {/* Steps - horizontal on desktop, vertical on mobile */}
                    <div className="md:grid md:grid-cols-5 md:gap-4 space-y-10 md:space-y-0">
                        {steps.map(({ Icon, title, time, desc }, i) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                transition={{ delay: i * 0.15 }}
                                className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-0 md:text-center"
                            >
                                {/* Step circle */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-royal-purple shadow-[0_4px_20px_rgba(108,74,182,0.15)] flex items-center justify-center md:mb-5">
                                        <Icon className="w-7 h-7 md:w-8 md:h-8 text-royal-purple" />
                                    </div>
                                </div>

                                <div className="flex-1 md:flex-none">
                                    {/* Step number */}
                                    <span className="text-xs font-bold text-royal-purple uppercase tracking-widest">
                                        Step {i + 1}
                                    </span>
                                    <h3 className="font-heading text-lg text-dark-charcoal mt-1 mb-1">{title}</h3>
                                    <span className="inline-block text-xs font-bold text-emerald-green bg-emerald-green/10 px-2 py-0.5 rounded-full mb-2">
                                        {time}
                                    </span>
                                    <p className="text-warm-grey text-sm leading-relaxed">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
