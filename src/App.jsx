import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="bg-[#141851] h-[100vh]">
      <section className="fixed w-full">
        <Navbar/>
      </section>
        <Hero/>
        
        {/* <Skill/> */}
      </div>
    </>
  )
}

export default App
