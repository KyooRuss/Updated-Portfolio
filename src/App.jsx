import Hero from './components/Hero'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Projects />
        <Certifications />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
