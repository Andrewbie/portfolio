import { useEffect } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skills from "./components/Skills"
import AOS from "aos"

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      <div className="bg-[#141851] h-[100%]">
      <section className="fixed w-full">
        <Navbar/>
      </section>

      <section className="h-full">
        <Hero/>
        </section>
        <Skills/>

        <Project/>
      </div>
    </>
  )
}

export default App
