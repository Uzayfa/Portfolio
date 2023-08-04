import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Experience, Tech, Works, Contact, StarsCanvas } from './components'

// also worked on the Hero today {29th of july 2023}, i added the Hero in the import but did not remember to add //
// it below the <Navbar/> closing tag//
const App = () => {
  
  return (
  <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
     <About />
     <Experience />
     <Tech />
     <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    
  </BrowserRouter>
)

}

export default App