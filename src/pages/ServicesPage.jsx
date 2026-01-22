import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </div>
  );
}

export default ServicesPage;