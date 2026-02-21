import logo from '../assets/logo-web1.png'

export default function Footer() {
    return (
        <footer id="footer" className="bg-dark-charcoal py-12">
            <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                {/* Logo implementation */}
                <div className="flex justify-center mb-4">
                    <img
                        src={logo}
                        alt="ZoroFlow Logo"
                        className="h-16 w-auto object-contain" // Adjust h-16 (64px) to your liking
                    />
                </div>
                <h3 className="font-heading text-2xl text-royal-purple mb-2">ZoroFlow</h3>
                <p className="text-warm-grey text-sm mb-6">
                    Professional websites + smart automation for service businesses.
                </p>
                <div className="border-t border-white/10 pt-6">
                    <p className="text-warm-grey/50 text-xs">
                        © {new Date().getFullYear()} ZoroFlow. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
