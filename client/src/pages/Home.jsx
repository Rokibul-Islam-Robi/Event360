import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Video, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Youtube, 
  Heart, 
  Award, 
  Play, 
  Package, 
  Gift, 
  Shield, 
  MessageCircle, 
  HelpCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import HeroBackgroundManager from '../components/HeroBackgroundManager';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [packages, setPackages] = useState([]);
  const [currentBackground, setCurrentBackground] = useState(null);

  // Load packages from localStorage
  useEffect(() => {
    const savedPackages = localStorage.getItem('event360_packages');
    if (savedPackages) {
      setPackages(JSON.parse(savedPackages));
    } else {
      // Default packages if none exist
      const defaultPackages = [
        {
          id: 1,
          title: "দুলহা দুলহান",
          subtitle: "Dulha Dulhan",
          price: "২৮,০০০৳",
          priceEn: "28,000 Taka",
          image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxZTI5NTQ7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM3MzA2NztzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB4PSI1MCIgeT0iNTAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSIyMDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjY2NhMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7gmbDgmbDgmbDgmbD4g4Jmw4Jmw4Jmw4Jmw4JmwPC90ZXh0Pgo8dGV4dCB4PSIyMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7gmbDgmbDgmbDgmbD4g4Jmw4Jmw4Jmw4Jmw4JmwPC90ZXh0Pgo8L3N2Zz4K",
          features: [
            "একজন চীফ ফটোগ্রাফার",
            "একজন সিনিয়র ফটোগ্রাফার", 
            "একজন চীফ সিনেমাটোগ্রাফার",
            "একজন সিনিয়র সিনেমাটোগ্রাফার",
            "১০০ কপি প্রিন্ট",
            "একটি ট্রেইলার",
            "একটি ফটো ফ্রেম",
            "একটি পেন্ড্রাইভ"
          ],
          featuresEn: [
            "One Chief Photographer",
            "One Senior Photographer",
            "One Chief Cinematographer", 
            "One Senior Cinematographer",
            "100 Copies Print",
            "One Trailer",
            "One Photo Frame",
            "One Pendrive"
          ],
          popular: true,
          bgColor: "from-blue-900 to-purple-900",
          borderColor: "border-blue-500"
        }
      ];
      setPackages(defaultPackages);
      localStorage.setItem('event360_packages', JSON.stringify(defaultPackages));
    }
  }, []);

  // Listen for changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const savedPackages = localStorage.getItem('event360_packages');
      if (savedPackages) {
        setPackages(JSON.parse(savedPackages));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleBackgroundChange = (background) => {
    setCurrentBackground(background);
  };

  // Sample events data
  const events = [
    { 
      id: 1, 
      title: "Wedding Photography", 
      category: "Photography", 
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      date: "2024-01-15",
      location: "Dhaka, Bangladesh",
      rating: 4.8,
      reviews: 24
    },
    { 
      id: 2, 
      title: "Corporate Event Coverage", 
      category: "Videography", 
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      date: "2024-01-20",
      location: "Chittagong, Bangladesh",
      rating: 4.9,
      reviews: 18
    },
    { 
      id: 3, 
      title: "Birthday Celebration", 
      category: "Photography", 
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
      date: "2024-01-25",
      location: "Sylhet, Bangladesh",
      rating: 4.7,
      reviews: 31
    },
    { 
      id: 4, 
      title: "Anniversary Shoot", 
      category: "Photography", 
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      date: "2024-01-30",
      location: "Rajshahi, Bangladesh",
      rating: 4.8,
      reviews: 22
    },
    { 
      id: 5, 
      title: "Graduation Ceremony", 
      category: "Videography", 
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
      date: "2024-02-05",
      location: "Khulna, Bangladesh",
      rating: 4.9,
      reviews: 28
    },
    { 
      id: 6, 
      title: "Engagement Party", 
      category: "Photography", 
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
      date: "2024-02-10",
      location: "Barisal, Bangladesh",
      rating: 4.7,
      reviews: 19
    }
  ];

  const filteredEvents = events.filter(event => {
    return activeFilter === 'All' || event.category === activeFilter;
  });

  // Services data
  const services = [
    { icon: Camera, title: "Wedding Photography", description: "Capture your special day with our professional wedding photography services." },
    { icon: Video, title: "Event Videography", description: "Professional video coverage for all your important events and celebrations." },
    { icon: Users, title: "Portrait Sessions", description: "Beautiful portrait photography for individuals, couples, and families." },
    { icon: Award, title: "Corporate Event", description: "Professional coverage for corporate events and business functions." }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What photography packages do you offer?",
      answer: "We offer comprehensive wedding photography packages starting from 28,000 Taka, including professional photographers, edited photos, and beautiful albums."
    },
    {
      question: "Do you provide videography services?",
      answer: "Yes, we offer professional videography services for weddings, corporate events, and special celebrations with cinematic quality."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 3-6 months in advance for weddings and 1-2 months for other events to ensure availability."
    },
    {
      question: "Do you travel outside Dhaka?",
      answer: "Yes, we provide services throughout Bangladesh. Travel costs may apply for locations outside Dhaka metropolitan area."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        {currentBackground ? (
          <div className="absolute inset-0 z-0">
            {currentBackground.mediaType === 'image' ? (
              <img
                src={currentBackground.file}
                alt={currentBackground.title}
                className="w-full h-full object-cover"
                style={{
                  transition: currentBackground.transition === 'fade' ? 'opacity 1s ease-in-out' : 'none'
                }}
              />
            ) : (
              <video
                src={currentBackground.file}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                style={{
                  transition: currentBackground.transition === 'fade' ? 'opacity 1s ease-in-out' : 'none'
                }}
              />
            )}
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ) : (
          /* Default gradient background */
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Main Logo */}
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <Logo showTagline={false} />
                </div>
                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-sm font-medium text-gray-300 uppercase tracking-widest"
                >
                  MAKE YOUR MOMENT SPECIAL
                </motion.p>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Making Your Special Moments{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Last Forever
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Professional wedding photography and videography services that capture the essence of your most precious moments with artistic excellence.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                to="/packages"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center group"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center justify-center group shadow-xl">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                <span>Watch Showreel</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Manager */}
        <HeroBackgroundManager onBackgroundChange={handleBackgroundChange} />
      </section>

      {/* Rest of the content remains the same */}
      {/* Recent Events Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recent <span className="text-purple-400">Events</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our latest work and see how we capture the magic of your special moments.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {['All', 'Photography', 'Videography'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      event.category === 'Photography' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-300 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white font-medium">{event.rating}</span>
                      <span className="text-gray-300 text-sm ml-1">({event.reviews})</span>
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Event 360 Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-purple-400">Event 360</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine artistic vision with technical excellence to deliver memories that last a lifetime.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Professional Team",
                description: "Experienced photographers and videographers with years of expertise."
              },
              {
                icon: Heart,
                title: "Secure Bookings",
                description: "Safe and secure booking system with flexible payment options."
              },
              {
                icon: MessageCircle,
                title: "Direct Communication",
                description: "Direct communication with your assigned photographer throughout the process."
              },
              {
                icon: Award,
                title: "Quality Guarantee",
                description: "100% satisfaction guarantee with unlimited revisions until you're happy."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Packages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our carefully crafted packages designed to capture your special moments with professional excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {packages.slice(0, 6).map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={itemVariants}
                className={`bg-gradient-to-br ${pkg.bgColor} backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border ${pkg.borderColor} hover:scale-105 transition-all duration-300 relative`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                {/* Package Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <h3 className="text-lg font-bold text-gray-800">{pkg.title}</h3>
                      <p className="text-sm text-gray-600">{pkg.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-white mb-2">{pkg.price}</div>
                    <div className="text-sm text-gray-300">{pkg.priceEn}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {pkg.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-white text-sm flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/packages"
                    className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-medium transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center justify-center"
                  >
                    Choose Package
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/packages"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              View All Packages
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-purple-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our photography and videography services.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Capture Your <span className="text-purple-400">Moments</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                contact: "+880 1234-567890",
                description: "Speak directly with our team"
              },
              {
                icon: Mail,
                title: "Email Us",
                contact: "info@event360.com",
                description: "Send us your requirements"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                contact: "Dhaka, Bangladesh",
                description: "Schedule a meeting"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                <p className="text-purple-400 font-semibold mb-2">{contact.contact}</p>
                <p className="text-gray-300 text-sm">{contact.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
