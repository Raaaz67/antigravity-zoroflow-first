import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function WhyFree() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="why-free" className="py-24 md:py-32 bg-off-white" ref={ref}>
            <div className="max-w-3xl mx-auto px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center">
                    <h2 className="font-heading text-3xl md:text-4xl text-dark-charcoal mb-10">
                        Why Would I Design Your Website{' '}
                        <span className="text-royal-purple">For Free?</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="prose prose-lg mx-auto space-y-6 text-dark-charcoal/80 leading-relaxed"
                >
                    <p className="text-lg">
                        <span className="font-bold text-dark-charcoal">Fair question.</span> Here's the honest answer:
                    </p>

                    <p>
                        I'm launching my web design business, and I need{' '}
                        <span className="font-bold text-dark-charcoal">10 real case studies</span> to show potential clients
                        what I can do.
                    </p>

                    <p>I could:</p>

                    <div className="space-y-3 my-6">
                        <div className="flex items-start gap-3 bg-soft-red/5 border border-soft-red/10 rounded-xl px-5 py-3">
                            <span className="text-soft-red font-bold text-lg leading-none mt-0.5">✗</span>
                            <span className="text-dark-charcoal/70">Build fake demo sites (but those don't prove anything)</span>
                        </div>
                        <div className="flex items-start gap-3 bg-soft-red/5 border border-soft-red/10 rounded-xl px-5 py-3">
                            <span className="text-soft-red font-bold text-lg leading-none mt-0.5">✗</span>
                            <span className="text-dark-charcoal/70">Charge discounted rates (but then I'd get price shoppers, not ideal clients)</span>
                        </div>
                        <div className="flex items-start gap-3 bg-emerald-green/5 border border-emerald-green/20 rounded-xl px-5 py-3">
                            <span className="text-emerald-green font-bold text-lg leading-none mt-0.5">✓</span>
                            <span className="text-dark-charcoal font-medium">
                                Design 10 perfect websites for free and let the results speak for themselves
                            </span>
                        </div>
                    </div>

                    <p>
                        You get a professional website design worth <span className="font-bold text-dark-charcoal">$2,500 — completely free.</span> I get a portfolio piece and testimonial.{' '}
                        <span className="font-bold text-royal-purple">Win-win.</span>
                    </p>

                    <div className="border-t border-warm-grey/30 pt-8 mt-8">
                        <h3 className="font-heading text-2xl text-dark-charcoal mb-4">What about hosting?</h3>
                        <p>
                            I can't give away hosting for free (that costs me real money every month — servers,
                            security, backups, bandwidth). So you have two options:
                        </p>
                        <div className="space-y-3 my-6">
                            <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-soft-lavender text-royal-purple text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                                <span><span className="font-bold text-dark-charcoal">Handle your own hosting</span> — $10–15/month through any hosting company</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-royal-purple text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                                <span><span className="font-bold text-dark-charcoal">Have us manage everything</span> — $97/month and we handle all technical stuff</span>
                            </div>
                        </div>
                        <p>
                            Either way, the{' '}
                            <span className="font-bold text-dark-charcoal">$2,500 design is 100% free.</span> You just cover
                            the ongoing hosting costs.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-royal-purple/5 to-soft-lavender/20 border border-royal-purple/10 rounded-2xl p-6 mt-8">
                        <p className="text-dark-charcoal font-medium text-center">
                            After these 10 spots are filled, I'm charging full price{' '}
                            <span className="font-bold">($1,497 for design alone)</span>. So if you've been
                            thinking about upgrading your website…{' '}
                            <span className="text-royal-purple font-bold">now's the time.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
