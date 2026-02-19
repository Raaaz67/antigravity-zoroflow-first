import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Sparkles, Shield } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
    visible: { transition: { staggerChildren: 0.06 } },
}

const valueItems = [
    { label: 'Custom 5-Page Website Design — Home, About, Services, Portfolio, Contact', value: '$1,500' },
    { label: 'Mobile-Responsive Design — Looks perfect on phones, tablets, desktops', value: '$300' },
    { label: 'Complete Setup & Configuration — We install and configure everything', value: '$400' },
    { label: 'Professional Copywriting Help — Industry-specific copy that builds trust', value: '$400' },
    { label: 'Contact Form Setup — Inquiries go straight to your email with auto-response', value: '$200' },
    { label: 'Basic SEO Setup — Found on Google for "estate liquidation Seattle"', value: '$250' },
    { label: 'Google Business Profile Integration — Connect your GBP for local visibility', value: '$100' },
    { label: 'Unlimited Design Revisions — We don\'t stop until you love it', value: '$500' },
    { label: 'Training & Documentation — Learn to make basic updates if you want (DIY option)', value: '$200' },
]

const diyFeatures = [
    { text: 'Professional website design (FREE)', included: true },
    { text: 'Complete setup & installation', included: true },
    { text: 'Training on basic updates', included: true },
    { text: 'You own and control everything', included: true },
]

const diyHandles = [
    'Purchase hosting from Bluehost/Hostinger ($10–15/mo)',
    'Purchase your domain ($12–15/year)',
    'Handle technical issues (or call hosting support)',
]

const fullFeatures = [
    { text: 'Professional website design (FREE)', included: true },
    { text: 'We host everything on premium servers', included: true },
    { text: 'We register/transfer your domain', included: true },
    { text: 'Unlimited technical support (text me anytime)', included: true },
    { text: 'Security updates & backups', included: true },
    { text: '5 content updates per month included', included: true },
]

const comparisonRows = [
    { feature: 'Professional Website Design', diy: '✅ Free', full: '✅ Free' },
    { feature: 'Complete Setup', diy: '✅ Free', full: '✅ Free' },
    { feature: 'You Own The Website', diy: '✅ Yes', full: '✅ Yes' },
    { feature: 'Monthly Cost', diy: '~$10–15', full: '$97' },
    { feature: 'Domain Registration', diy: 'You handle', full: '✅ We handle' },
    { feature: 'Technical Support', diy: 'You handle', full: '✅ We handle' },
    { feature: 'Security Updates', diy: 'You handle', full: '✅ We handle' },
    { feature: 'Content Updates', diy: 'You handle', full: '✅ 5/month included' },
    { feature: 'Backups', diy: 'You handle', full: '✅ We handle' },
]

export default function IrresistibleOffer() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const scrollToForm = () => {
        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="the-offer" className="py-24 md:py-32 bg-midnight-blue relative overflow-hidden" ref={ref}>
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-royal-purple/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-green/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] text-white leading-tight mb-4">
                        Get Everything You Need to Win More
                        <br />
                        <span className="text-soft-lavender">Estate Liquidation Jobs</span>
                    </h2>
                    <p className="text-soft-lavender/80 text-lg max-w-2xl mx-auto">
                        I'm building 10 professional websites at no cost. You get the full design worth $2,500 — completely free. Just choose your hosting option.
                    </p>
                </motion.div>

                {/* Value Stack */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <div className="space-y-4">
                            {valueItems.map(({ label, value }) => (
                                <motion.div key={label} variants={fadeUp} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-green flex-shrink-0 mt-0.5" />
                                    <span className="text-white/90 flex-1">{label}</span>
                                    <span className="text-soft-lavender font-bold whitespace-nowrap">({value})</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="mt-10 text-center">
                            <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-8 py-6">
                                <p className="text-warm-grey text-sm uppercase tracking-widest mb-2">Total Value</p>
                                <p className="text-3xl text-white/50 line-through font-bold mb-1">$3,850</p>
                                <p className="text-4xl md:text-5xl font-heading text-emerald-green">
                                    Your Investment: <span className="font-bold">$0</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Choose Your Hosting */}
                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    <h3 className="font-heading text-2xl md:text-3xl text-white text-center mb-10">
                        Then Choose Your Hosting:
                    </h3>
                </motion.div>

                {/* Two Hosting Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    {/* DIY Card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-soft-lavender/30 transition-all duration-300 relative"
                    >
                        <span className="absolute -top-3 left-6 bg-soft-lavender text-midnight-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Most Affordable
                        </span>
                        <h4 className="font-heading text-xl text-white mt-2 mb-1">DIY Hosting</h4>
                        <p className="text-soft-lavender/60 text-sm mb-4">Budget-Friendly</p>
                        <p className="text-3xl font-bold text-white mb-1">~$10–15<span className="text-lg text-warm-grey">/month</span></p>
                        <p className="text-warm-grey text-sm mb-6">Best For: Tech-comfortable owners who want to save money</p>

                        <p className="text-emerald-green text-xs uppercase tracking-widest font-bold mb-3">What You Get</p>
                        <div className="space-y-2 mb-6">
                            {diyFeatures.map(({ text }) => (
                                <div key={text} className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-green flex-shrink-0" />
                                    <span className="text-white/80 text-sm">{text}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-soft-red/80 text-xs uppercase tracking-widest font-bold mb-3">What You Handle</p>
                        <div className="space-y-2 mb-8">
                            {diyHandles.map((text) => (
                                <div key={text} className="flex items-center gap-2">
                                    <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-warm-grey text-xs">•</span>
                                    <span className="text-warm-grey text-sm">{text}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={scrollToForm}
                            className="cursor-pointer w-full py-3 rounded-xl bg-soft-lavender text-midnight-blue font-bold transition-all duration-200 hover:bg-soft-lavender-light hover:scale-[1.03] hover:shadow-lg"
                        >
                            Choose DIY Hosting
                        </button>
                    </motion.div>

                    {/* Full-Service Card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="bg-gradient-to-b from-royal-purple/20 to-white/5 backdrop-blur-sm border-2 border-royal-purple/50 rounded-2xl p-8 hover:border-royal-purple transition-all duration-300 relative shadow-[0_0_40px_rgba(108,74,182,0.15)]"
                    >
                        <span className="absolute -top-3 left-6 bg-emerald-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide animate-pulse-glow flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Most Popular
                        </span>
                        <h4 className="font-heading text-xl text-white mt-2 mb-1">Full-Service</h4>
                        <p className="text-soft-lavender/60 text-sm mb-4">Hands-Off</p>
                        <p className="text-3xl font-bold text-white mb-1">$97<span className="text-lg text-warm-grey">/month</span></p>
                        <p className="text-warm-grey text-sm mb-6">Best For: Busy professionals who want everything handled</p>

                        <p className="text-emerald-green text-xs uppercase tracking-widest font-bold mb-3">What You Get</p>
                        <div className="space-y-2 mb-6">
                            {fullFeatures.map(({ text }) => (
                                <div key={text} className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-green flex-shrink-0" />
                                    <span className="text-white/80 text-sm">{text}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-emerald-green/80 text-xs uppercase tracking-widest font-bold mb-3">What You Handle</p>
                        <div className="flex items-center gap-2 mb-8">
                            <Shield className="w-4 h-4 text-emerald-green flex-shrink-0" />
                            <span className="text-white/80 text-sm font-medium">Nothing. We handle 100% of technical stuff.</span>
                        </div>

                        <button
                            onClick={scrollToForm}
                            className="cursor-pointer w-full py-3 rounded-xl bg-royal-purple text-white font-bold transition-all duration-200 hover:bg-royal-purple-light hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(108,74,182,0.4)]"
                        >
                            Choose Full-Service
                        </button>
                    </motion.div>
                </div>

                {/* Comparison Table */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="px-6 py-4 text-soft-lavender font-bold text-sm">What You Get</th>
                                        <th className="px-6 py-4 text-soft-lavender font-bold text-sm text-center">DIY Hosting</th>
                                        <th className="px-6 py-4 text-soft-lavender font-bold text-sm text-center">Full-Service</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonRows.map(({ feature, diy, full }, i) => (
                                        <tr key={feature} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                                            <td className="px-6 py-3 text-white/80 text-sm">{feature}</td>
                                            <td className="px-6 py-3 text-warm-grey text-sm text-center">{diy}</td>
                                            <td className="px-6 py-3 text-emerald-green text-sm text-center font-medium">{full}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="text-center text-soft-lavender/70 text-sm mt-8 max-w-2xl mx-auto">
                        Both options work perfectly. Choose DIY if you want to save money and don't mind handling technical stuff. Choose Full-Service if you'd rather focus on your business and let us handle everything.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
