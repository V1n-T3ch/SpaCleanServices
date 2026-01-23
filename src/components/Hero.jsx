function Hero() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-teal-600 via-teal-700 to-teal-800 pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-5rem)] py-16 gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Available for bookings today</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Cleaning
              <br />
              Services in
              <br />
              <span className="text-teal-200">Nyeri</span>
            </h1>
            
            <p className="text-teal-100 text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Transform your space with our professional cleaning experts. From homes to offices, we deliver spotless results every time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a 
                href="#contact" 
                className="bg-white text-teal-700 px-8 py-4 rounded-full hover:bg-teal-50 transition-all font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-black/10"
              >
                Book Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#services" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all font-semibold inline-flex items-center justify-center gap-2"
              >
                Our Services
              </a>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image card */}
              <div className="w-80 sm:w-[420px] h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=800&fit=crop" 
                  alt="Professional cleaner"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -left-6 top-8 bg-white rounded-2xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-500">Satisfaction</p>
                  </div>
                </div>
              </div>
              
              {/* Floating card bottom */}
              <div className="absolute -right-4 bottom-12 bg-white rounded-2xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-teal-500"></div>
                    <div className="w-8 h-8 rounded-full bg-teal-400"></div>
                    <div className="w-8 h-8 rounded-full bg-teal-300"></div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Expert Team</p>
                    <p className="text-xs text-gray-500">Trained professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;