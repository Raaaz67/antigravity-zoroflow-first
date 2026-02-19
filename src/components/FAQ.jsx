import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const faqs = [
    {
        q: "Why can't you include free hosting?",
        a: "Hosting costs me real money every month (servers, security, backups, bandwidth). I'd love to give it away, but I can't run a sustainable business losing money on every client. The $2,500 design work? That's my time, and I'm giving it free to build my portfolio. But ongoing hosting costs are real expenses I can't absorb.",
    },
    {
        q: "What's the REAL catch with hosting?",
        a: 'No catch. You have two simple options: (1) Buy hosting yourself for $10–15/month (like paying for your own phone plan), or (2) Pay us $97/month and we handle everything (like having a phone + tech support). The website design is yours free either way. You just can\'t have a website without hosting — that\'s true for everyone, everywhere.',
    },
    {
        q: 'Can I switch hosting options later?',
        a: 'Absolutely! Start with DIY and upgrade to Full-Service anytime. Or start Full-Service and downgrade to DIY after 90 days. Total flexibility.',
    },
    {
        q: 'Do I own the website if I stop paying?',
        a: "100% YES. Whether you choose DIY or Full-Service, you own the website. If you stop paying Full-Service, I'll give you all the files to move it wherever you want. You own the code, design, and content — always.",
    },
    {
        q: 'What if I choose DIY but get stuck?',
        a: "I'll set up everything for you initially, so you won't be figuring it out alone. Plus, hosting companies have 24/7 support. But if DIY feels overwhelming, just upgrade to Full-Service and I'll take over.",
    },
    {
        q: 'Why only 10 spots?',
        a: 'Quality over quantity. I want to build 10 amazing case studies that showcase my work, not rush through 50 mediocre sites. Each website gets my full attention and unlimited revisions until you love it.',
    },
    {
        q: "What if I don't like the design?",
        a: "Unlimited revisions during the build phase. If you genuinely hate it after we've worked together in good faith, you owe me nothing. No testimonial required. I'll eat the loss and move on. (But that's never happened yet.)",
    },
    {
        q: 'What pages are included?',
        a: '5 pages: Home, About, Services, Portfolio/Past Jobs, Contact. That covers everything most estate liquidation companies need.',
    },
]

function FAQItem({ q, a, isOpen, onToggle, index }) {
    return (
        <motion.div
            variants={fadeUp}
            className="border-b border-warm-grey/20 last:border-b-0"
        >
            <button
                onClick={onToggle}
                className="cursor-pointer w-full flex items-center justify-between py-5 px-2 text-left group"
                aria-expanded={isOpen}
            >
                <span className="font-bold text-dark-charcoal group-hover:text-royal-purple transition-colors duration-200 pr-4">
                    {q}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="w-5 h-5 text-royal-purple" />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="px-2 pb-5 text-dark-charcoal/70 leading-relaxed">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function FAQ() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section id="faq" className="py-24 md:py-32 bg-soft-lavender/30" ref={ref}>
            <div className="max-w-3xl mx-auto px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl text-dark-charcoal">
                        Common Questions About This{' '}
                        <span className="text-royal-purple">Free Offer</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] px-6 md:px-8"
                >
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={i}
                            index={i}
                            q={faq.q}
                            a={faq.a}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
