import { useState, useEffect} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { HeroCalculator, Galery, Contact, Calculator, Footer, ThankYouPage, GaleryFullPage } from './sections/index.js';
import Nav from './components/Nav';
import { crochetBackground } from './assets';
import 'swiper/swiper-bundle.css';
import GaleryCardPage from './sections/GaleryCardPage.jsx';


const App = () => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track if page is scrolled
 

  // Handle scroll detection for Navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Set threshold for scroll, e.g., 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup scroll event
    };
  }, []);


  return (
    <Router>
      <main className="w-full h-screen">
        {/* Navbar with conditional background */}
        <header
          id="home"
          className={`padding-x py-8 z-20 w-full top-0 fixed transition-colors duration-300 ${
            isScrolled ? 'bg-white bg-opacity-90 shadow-md' : 'bg-transparent'
          }`}
        >
          <Nav />
        </header>

        {/* Define routes */}
        <Routes>
          {/* Home Route: Combine HeroCalculator, Galery, and Contact */}
          <Route
            path="/"
            element={
              <>
                {/* HeroCalculator Section */}
                <section id="calculator" className="relative h-screen w-full">
                  <div className="h-full w-full border-2 flex items-center justify-center border-red-600">
                    <img
                      src={crochetBackground}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      alt="background"
                    />
                    <div className="relative z-10">
                      <HeroCalculator />
                    </div>
                  </div>
                </section>

                {/* Galery Section */}
                <section id="galery" className="w-full h-screen">
                  <Galery />
                </section>

                {/* Contact Section */}
                <section id="contact" className="w-full h-screen">
                  <Contact />
                </section>
                <section>
                  <Footer/>
                </section>
              </>
            }
          />

          <Route path="/thankyou" element={<ThankYouPage />}/>
          <Route path="/gallery" element={<GaleryFullPage />} />   
          <Route path="/product/:id" element={<GaleryCardPage />} />
          {/* Separate Calculator Route */}
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
