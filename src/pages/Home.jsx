import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';
import ContactStrip from '../components/ContactStrip';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <ContactStrip />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;