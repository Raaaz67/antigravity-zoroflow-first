import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, AlertTriangle } from 'lucide-react'

const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
    }),
}

export default function Hero() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #2D2A4A 0%, #1F1D38 40%, #3a2d6b 70%, #2D2A4A 100%)',
            }}
        >
            {/* Animated gradient overlay */}
            <div
                className="absolute inset-0 opacity-30 animate-gradient"
                style={{
                    background: 'linear-gradient(45deg, #6C4AB6 0%, transparent 40%, #38A169 70%, transparent 100%)',
                    backgroundSize: '200% 200%',
                }}
            />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Scarcity Badge */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute top-6 right-6 z-20 animate-pulse-glow rounded-xl px-5 py-3 bg-emerald-green text-white font-bold text-sm md:text-base cursor-default"
            >
                <span className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Only 10 Spots&nbsp;|&nbsp;4 Already Claimed
                </span>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Column - Copy */}
                <div>
                    <motion.p
                        custom={0}
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-emerald-green font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Free Beta Program — Limited Spots
                    </motion.p>

                    <motion.h1
                        custom={1}
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] leading-tight text-white mb-6"
                    >
                        Seattle Estate Liquidation Companies: Get a Professional{' '}
                        <span className="text-soft-lavender">$2,500</span> Website Design —{' '}
                        <span className="text-emerald-green">100% Free</span>
                    </motion.h1>

                    <motion.p
                        custom={2}
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-soft-lavender text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
                    >
                        I'm designing 10 websites this month for estate liquidation professionals at no cost to
                        build my portfolio. You get a complete 5-page professional site for free — just choose
                        your hosting option.
                    </motion.p>

                    <motion.div custom={3} variants={heroVariants} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => scrollToSection('application-form')}
                            className="cursor-pointer inline-flex items-center justify-center gap-2 bg-royal-purple hover:bg-royal-purple-light text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_30px_rgba(108,74,182,0.5)]"
                        >
                            Claim Your Free Website Design
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => scrollToSection('why-this-matters')}
                            className="cursor-pointer inline-flex items-center justify-center gap-2 text-soft-lavender hover:text-white font-medium text-lg transition-colors duration-200"
                        >
                            See What's Included
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>

                {/* Right Column - Before/After Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                    className="hidden lg:block"
                >
                    <div className="relative">
                        {/* Card container */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                            <p className="text-center text-soft-lavender font-bold text-sm tracking-widest uppercase mb-5">
                                From This → To This (For Free)
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Before */}
                                <div className="relative rounded-xl overflow-hidden border-2 border-soft-red/40">
                                    <div className="bg-gradient-to-b from-gray-300 to-gray-400 p-4 h-56 flex flex-col items-center justify-center opacity-60">
                                        <div className="w-full h-4 bg-gray-500/40 rounded mb-3" />
                                        <div className="w-3/4 h-3 bg-gray-500/30 rounded mb-2" />
                                        <div className="w-full h-20 bg-gray-500/20 rounded mb-3 mt-4" />
                                        <div className="flex gap-2 w-full">
                                            <div className="flex-1 h-8 bg-gray-500/30 rounded" />
                                            <div className="flex-1 h-8 bg-gray-500/30 rounded" />
                                        </div>
                                        <div className="w-2/3 h-3 bg-gray-500/20 rounded mt-3" />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-full h-[2px] bg-soft-red rotate-[15deg] transform scale-110" />
                                    </div>
                                    <div className="absolute bottom-2 left-2 bg-soft-red text-white text-xs font-bold px-2 py-1 rounded">
                                        Outdated
                                    </div>
                                </div>

                                {/* After */}
                                <div className="relative rounded-xl overflow-hidden border-2 border-emerald-green/60">
                                    <div className="bg-gradient-to-b from-midnight-blue to-royal-purple p-4 h-56 flex flex-col items-center justify-center">
                                        <div className="w-full h-4 bg-white/20 rounded mb-3" />
                                        <div className="w-3/4 h-3 bg-soft-lavender/30 rounded mb-2" />
                                        <div className="w-full h-20 bg-white/10 rounded mb-3 mt-4 border border-white/10" />
                                        <div className="flex gap-2 w-full">
                                            <div className="flex-1 h-8 bg-royal-purple-light rounded" />
                                            <div className="flex-1 h-8 bg-emerald-green/80 rounded" />
                                        </div>
                                        <div className="w-2/3 h-3 bg-soft-lavender/20 rounded mt-3" />
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-emerald-green text-white text-xs font-bold px-2 py-1 rounded">
                                        Professional
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-royal-purple/20 blur-3xl rounded-full" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                    <ChevronDown className="w-6 h-6 text-soft-lavender/50" />
                </motion.div>
            </motion.div>
        </section>
    )
}
