import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/assets/logo.webp';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-24 h-24" />
              <span className="text-xl font-bold text-gray-900">Spar<span className="text-teal-600">Clean</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className="px-4 py-2 text-gray-600 hover:text-teal-600 transition font-medium">Home</Link>
            <a href="/#about" className="px-4 py-2 text-gray-600 hover:text-teal-600 transition font-medium">About</a>
            <Link to="/services" className="px-4 py-2 text-gray-600 hover:text-teal-600 transition font-medium">Services</Link>
            <Link to="/gallery" className="px-4 py-2 text-gray-600 hover:text-teal-600 transition font-medium">Gallery</Link>
            <Link to="/contact" className="px-4 py-2 text-gray-600 hover:text-teal-600 transition font-medium">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+254780778880" className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">0780 778880</span>
            </a>
            <p><span className="font-medium">or</span></p>
            <a href="tel:+254706209465" className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">0706 209465</span>
            </a>
            <Link to="/contact" className="bg-teal-600 text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition font-medium">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <Link to="/" className="block py-3 text-gray-700 hover:text-teal-600 font-medium">Home</Link>
            <a href="/#about" className="block py-3 text-gray-700 hover:text-teal-600 font-medium">About</a>
            <Link to="/services" className="block py-3 text-gray-700 hover:text-teal-600 font-medium">Services</Link>
            <Link to="/gallery" className="block py-3 text-gray-700 hover:text-teal-600 font-medium">Gallery</Link>
            <Link to="/contact" className="block py-3 text-gray-700 hover:text-teal-600 font-medium">Contact</Link>
            <Link to="/contact" className="block mt-4 bg-teal-600 text-white px-6 py-3 rounded-full text-center font-medium">
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;