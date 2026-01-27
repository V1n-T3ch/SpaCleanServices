import AboutBig from "../assets/about1.jpeg"
import AboutSmall from "../assets/about2.jpeg"

function AboutUs() {
  const features = [
    { icon: "🛡️", title: "Licensed & Insured", desc: "Full coverage for your peace of mind" },
    { icon: "🌿", title: "Eco-Friendly", desc: "Safe, non-toxic cleaning products" },
    { icon: "⏰", title: "Flexible Scheduling", desc: "Available 7 days a week" },
    { icon: "✨", title: "Quality Guaranteed", desc: "100% satisfaction promise" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left - Images */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative z-10">
                  <img 
                    src={AboutBig}
                    alt="Cleaning service"
                    className="rounded-3xl shadow-xl w-full h-80 object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 z-20">
                  <img 
                    src={AboutSmall}
                    alt="Clean home"
                    className="rounded-2xl shadow-xl w-full h-full object-cover border-4 border-white"
                  />
                </div>
                {/* Experience badge */}
                <div className="absolute -left-4 bottom-12 bg-teal-600 text-white p-4 rounded-2xl shadow-lg z-30">
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm text-teal-100">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-teal-50 rounded-full mb-4">
              <span className="text-teal-600 text-sm font-semibold tracking-wide uppercase">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We Make Your Home
              <br />
              <span className="text-teal-600">Sparkle & Shine</span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              SPARCleaning Services has been transforming spaces across Nyeri for over a decade. Our professional team combines expertise with eco-friendly practices to deliver exceptional results every time.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              We understand that every space is unique. That's why we offer customized cleaning solutions tailored to your specific needs, whether it's a cozy apartment or a large commercial facility.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{feature.title}</p>
                    <p className="text-gray-500 text-xs">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition">
              Learn more about us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;