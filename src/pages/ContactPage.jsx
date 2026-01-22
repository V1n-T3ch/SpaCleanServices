import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;