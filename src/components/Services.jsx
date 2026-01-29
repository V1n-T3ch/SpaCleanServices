import Sofa from "../assets/sofa.jpeg"
import Carpet from "../assets/carpet.jpeg"
import House from "../assets/house.jpeg"
import Office from "../assets/office.jpeg"
import Floor from "../assets/floor.jpeg"
import Construction from "../assets/construction.jpeg"
import Pest from "../assets/pest.jpeg"

function Services() {
  const services = [
    {
      image: Sofa,
      title: "Sofa Cleaning",
      description: "Professional deep cleaning for sofas, carpets, and upholstery. We remove stains, odors, and allergens from your furniture for both homes and offices.",
      features: ["Stain & odor removal", "Quick dry technology", "Home & office service"]
    },
    {
      image: Carpet,
      title: "Carpet Cleaning",
      description: "Expert carpet cleaning services to revitalize your floors. We eliminate dirt, dust mites, and allergens, leaving your carpets fresh and clean.",
      features: ["Deep cleaning", "Allergen removal", "Eco-friendly products"]
    },
    {
      image: House,
      title: "House Cleaning",
      description: "Complete residential cleaning services. From regular maintenance to deep cleaning, we keep your home spotless and fresh.",
      features: ["All rooms covered", "Eco-friendly products", "Flexible scheduling"]
    },
    {
      image: Office,
      title: "Office Cleaning",
      description: "Professional cleaning services for commercial spaces. We ensure a clean and healthy work environment with tailored cleaning plans to suit your business needs.",
      features: ["Custom plans", "After-hours service", "Sanitization included"]
    },
    {
      image: Construction,
      title: "Post Construction Cleaning",
      description: "Thorough cleaning after renovation or construction. We remove dust, debris, and residue to make your new space move-in ready.",
      features: ["Debris removal", "Deep sanitization", "Final polish finish"]
    },
    {
      image: Floor,
      title: "Floor Scrubbing",
      description: "Professional floor scrubbing and polishing services for all types of flooring. We restore shine and cleanliness to your hard floors, enhancing their appearance and longevity.",
      features: ["All floor types", "Restores shine", "Protective finish"]
    },
    {
      image: Pest,
      title: "Pest Control",
      description: "Effective pest control solutions for your home or business. We eliminate cockroaches, bedbugs, rodents, and other pests safely.",
      features: ["Safe treatments", "Long-lasting results", "All pest types"]
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-teal-50 rounded-full mb-4">
            <span className="text-teal-600 text-sm font-semibold tracking-wide uppercase">We Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional cleaning and pest control services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our expert team provides top-notch cleaning and pest control solutions tailored to your needs. Experience a cleaner, healthier environment today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="px-4 py-1.5 bg-teal-500 text-white text-sm font-medium rounded-full">
                    {service.title}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition group/link"
                >
                  Book This Service
                  <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 bg-teal-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Cleaning Solution?
          </h3>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            We offer tailored packages for unique cleaning requirements. Contact us to discuss your specific needs.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-full hover:bg-teal-50 transition font-semibold"
          >
            Get a Free Quote
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;