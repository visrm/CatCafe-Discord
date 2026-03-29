import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import JoinCTA from '@/components/JoinCTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Stats />
        <Testimonials />
        <JoinCTA />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
