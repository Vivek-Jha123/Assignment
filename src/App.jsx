import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Investment from "./components/Investment/Investment";
import Blog from "./components/Blog/Blog";
import Business from "./components/Business/Business";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <Investment />
      <Blog />
      <Business />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
