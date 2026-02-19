import Hero from './components/Hero'
import WhyThisMatters from './components/WhyThisMatters'
import IrresistibleOffer from './components/IrresistibleOffer'
import WhyFree from './components/WhyFree'
import DecisionHelper from './components/DecisionHelper'
import WhoThisIsFor from './components/WhoThisIsFor'
import HowThisWorks from './components/HowThisWorks'
import FAQ from './components/FAQ'
import HonestPositioning from './components/HonestPositioning'
import SocialProof from './components/SocialProof'
import ApplicationForm from './components/ApplicationForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyThisMatters />
      <IrresistibleOffer />
      <WhyFree />
      <DecisionHelper />
      <WhoThisIsFor />
      <HowThisWorks />
      <FAQ />
      <HonestPositioning />
      <SocialProof />
      <ApplicationForm />
      <Footer />
    </div>
  )
}
