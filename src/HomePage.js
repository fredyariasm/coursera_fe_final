import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Highlights from './Components/Highlights';
import Nav from  './Components/Nav'
import Testimonials from './Components/Testimonials';

function HomePage() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Highlights></Highlights>
      <Testimonials></Testimonials>
      <About></About>
      <Footer></Footer>

    </>
  );
}

export default HomePage;
