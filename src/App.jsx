import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {


  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
