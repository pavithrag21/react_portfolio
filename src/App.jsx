
import About from './components/About'
import CardData from './components/CardData'
import Details from './components/Details'
import Ex from './components/Ex'
import NavHead from './components/NavHead'
import Services from './components/Services'
import Skills from './components/Skills'


const App = () => {
  
  return (
    <div className='text-white overflow-x-hidden'>
      <div className= "bg-cover h-screen top-0 -z-10 max-h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      <div className="container mx-auto px-8">
      <NavHead/>
      <About/>
      <Services/>
      <CardData/>
      <Skills/>
      <Ex/>
      <Details/>
      </div>
      </div>
      </div>
       
      
  );
};

export default App;