import { useEffect } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skills from "./components/Skills"
import AOS from "aos"
import Herox from "./components/Herox"
import Contact from "./components/Contact"

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      
      <section className="fixed w-[100vw] z-10">
        <Navbar/>
      </section>
        <Hero/>
        <Skills/>

        <Project/>
        <Contact/>
    </>
  )
}

export default App
