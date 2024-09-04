import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'
import Projects from './sections/projects/Projects'
import Skills from './sections/skills/Skills'

function App() {
  return (
    <>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
