import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Values from './components/Values'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

const Home = () => (
  <div className="min-h-screen bg-white overflow-x-hidden font-sans">
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Values />
      <CtaBanner />
    </main>
    <Footer />
  </div>
)

export default Home
