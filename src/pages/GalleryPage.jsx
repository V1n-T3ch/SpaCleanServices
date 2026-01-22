import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'deep', label: 'Deep Cleaning' },
    { id: 'carpet', label: 'Carpet & Upholstery' },
  ];

  const gallery = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
      category: "residential",
      title: "Living Room Deep Clean",
      description: "Complete living room transformation"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      category: "residential",
      title: "Kitchen Cleaning",
      description: "Spotless kitchen after deep cleaning"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",
      category: "residential",
      title: "Bathroom Sanitization",
      description: "Thorough bathroom cleaning and sanitization"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      category: "commercial",
      title: "Office Space",
      description: "Corporate office cleaning service"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
      category: "commercial",
      title: "Conference Room",
      description: "Meeting room deep clean"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      category: "carpet",
      title: "Carpet Cleaning",
      description: "Professional carpet stain removal"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      category: "residential",
      title: "Whole House Clean",
      description: "Complete home cleaning service"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&h=400&fit=crop",
      category: "commercial",
      title: "Retail Store",
      description: "Commercial retail cleaning"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&h=400&fit=crop",
      category: "deep",
      title: "Oven Deep Clean",
      description: "Kitchen appliance detailed cleaning"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      category: "residential",
      title: "Bedroom Refresh",
      description: "Fresh and clean bedroom space"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      category: "deep",
      title: "Window Cleaning",
      description: "Crystal clear window results"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
      category: "carpet",
      title: "Sofa Cleaning",
      description: "Upholstery deep cleaning service"
    },
  ];

  const filteredGallery = activeFilter === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-linear-to-br from-teal-600 via-teal-700 to-teal-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
            <span className="text-white/90 text-sm font-medium">Our Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work Gallery
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto">
            Browse through our collection of completed projects. See the quality and attention to detail we bring to every cleaning job.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeFilter === filter.id
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-200'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item,) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-medium rounded-full mb-2 capitalize">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want Results Like These?
          </h2>
          <p className="text-gray-600 mb-8">
            Let our professional team transform your space. Book a cleaning service today and experience the difference.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition font-semibold"
          >
            Get Your Free Quote
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-xl">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default GalleryPage;