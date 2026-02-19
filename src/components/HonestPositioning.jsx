import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Shield, HardDrive, Wifi, Wrench } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const costItems = [
    { Icon: Server, label: 'Server space to keep your site online' },
    { Icon: Shield, label: 'Security certificates (SSL)' },
    { Icon: HardDrive, label: 'Backups and redundancy' },
    { Icon: Wifi, label: 'Bandwidth as people visit your site' },
    { Icon: Wrench, label: 'Technical infrastructure maintenance' },
]

export default function HonestPositioning() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="honest-positioning" className="py-24 md:py-32 bg-midnight-blue relative overflow-hidden" ref={ref}>
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl text-white">
                        Let's Be Honest About{' '}
                        <span className="text-soft-lavender">Hosting Costs</span>
                    </h2>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-6 text-white/80 leading-relaxed">
                    <p>
                        You might be thinking:{' '}
                        <em className="text-soft-lavender">
                            "If he's giving away $2,500 in design work, why can't he throw in $15/month hosting?"
                        </em>
                    </p>

                    <p>
                        <span className="font-bold text-white">Fair question.</span> Here's the honest answer:
                    </p>

                    <p>
                        The design work is my <span className="font-bold text-white">TIME</span>. I'm investing
                        my time to build my portfolio. Once your site is done, that time investment is complete.
                    </p>

                    <p>
                        Hosting is an <span className="font-bold text-white">ONGOING EXPENSE</span>. Every month,
                        I pay real money for:
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 my-8">
                        {costItems.map(({ Icon, label }) => (
                            <div key={label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                                <Icon className="w-5 h-5 text-royal-purple-light flex-shrink-0" />
                                <span className="text-white/80 text-sm">{label}</span>
                            </div>
                        ))}
                    </div>

                    <p>
                        If I gave away free hosting, I'd lose money every single month on every client.{' '}
                        <span className="text-soft-lavender">That's not a business — that's charity.</span>
                    </p>

                    <div className="border-t border-white/10 pt-8 mt-8 space-y-4">
                        <p>
                            The <span className="font-bold text-soft-lavender">DIY option</span> exists because some
                            businesses want to save money and don't mind handling technical stuff.{' '}
                            <span className="text-emerald-green">Totally respect that!</span>
                        </p>
                        <p>
                            The <span className="font-bold text-royal-purple-light">Full-Service option</span> exists
                            because most estate liquidation professionals would rather pay $97/month to never think
                            about their website again.{' '}
                            <span className="text-emerald-green">Also totally respect that!</span>
                        </p>
                        <p>
                            Both paths work great. Both give you the same professional website design (worth $2,500)
                            for free.
                        </p>
                        <p className="font-bold text-white">
                            You just choose which hosting path makes sense for your situation.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8">
                        <p className="text-white/70 text-sm leading-relaxed">
                            If you're still thinking "this guy's trying to trick me into paying monthly" — I'm not.
                            You literally can choose DIY and I make{' '}
                            <span className="font-bold text-white">$0 recurring</span> from you. The free design is
                            still worth it to me for the case study. I'm just being transparent about the reality:
                            websites cost money to host. You can handle that cost directly ($10–15/month) or pay me to
                            handle it for you ($97/month with extras included).{' '}
                            <span className="text-soft-lavender font-medium">Your choice. I'm good either way.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
