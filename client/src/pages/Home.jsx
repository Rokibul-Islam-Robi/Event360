import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Users, Star, CheckCircle, ArrowRight, Search, Calendar, MapPin, Phone, Mail, Instagram, Facebook, Youtube, Heart, Award, Play, Package, Gift, Shield, MessageCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Sarah & John's Wedding",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1519741497674-611863552?w=400&h=300&fit=crop",
      date: "March 15, 2024",
      location: "Grand Plaza Hotel"
    },
    {
      id: 2,
      title: "Corporate Annual Meeting",
      category: "Videography",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      date: "March 10, 2024",
      location: "Business Center"
    },
    {
      id: 3,
      title: "Emma's Sweet 16",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=300&fit=crop",
      date: "March 8, 2024",
      location: "Community Hall"
    },
    {
      id: 4,
      title: "Tech Conference 2024",
      category: "Videography",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      date: "March 5, 2024",
      location: "Convention Center"
    },
    {
      id: 5,
      title: "Mike & Lisa's Engagement",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      date: "March 3, 2024",
      location: "Central Park"
    },
    {
      id: 6,
      title: "Product Launch Event",
      category: "Videography",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      date: "March 1, 2024",
      location: "Innovation Hub"
    }
  ];

  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  // Services data
  const services = [
    { icon: Calendar, title: "Book Event", description: "Reserve your preferred date and time with our professional team." },
    { icon: Package, title: "Packages", description: "Choose from our comprehensive photography and videography packages." },
    { icon: Camera, title: "Photography", description: "Professional photography services for all your special moments." },
    { icon: Video, title: "Videography", description: "Cinematic video production to capture your memories in motion." },
    { icon: Users, title: "Professional Photoshoot", description: "Expert photographers for portraits, events, and special occasions." },
    { icon: Award, title: "Corporate Event", description: "Professional coverage for corporate events and business functions." }
  ];

  // Packages data
  const packages = [
    {
      title: "Basic Package",
      price: "$999",
      features: [
        "4 hours coverage",
        "100 edited photos",
        "Online gallery",
        "Basic editing"
      ],
      popular: false
    },
    {
      title: "Standard Package",
      price: "$1,499",
      features: [
        "8 hours coverage",
        "200 edited photos",
        "Online gallery",
        "Professional editing",
        "USB drive"
      ],
      popular: true
    },
    {
      title: "Premium Package",
      price: "$2,499",
      features: [
        "Full day coverage",
        "400 edited photos",
        "Online gallery",
        "Premium editing",
        "USB drive",
        "Photo album"
      ],
      popular: false
    },
    {
      title: "Ultimate Package",
      price: "$3,999",
      features: [
        "Full day coverage",
        "600 edited photos",
        "Online gallery",
        "Premium editing",
        "USB drive",
        "Photo album",
        "Video highlights"
      ],
      popular: false
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What packages do you offer for wedding photography?",
      answer: "We offer comprehensive wedding packages including engagement shoots, full-day coverage, and premium albums. Our packages start from $1,500 and include high-resolution digital files."
    },
    {
      question: "How far in advance should I book my event?",
      answer: "We recommend booking at least 6-12 months in advance for weddings and 2-3 months for other events. Popular dates fill up quickly, so early booking ensures availability."
    },
    {
      question: "Do you provide videography services as well?",
      answer: "Yes! We offer both photography and videography services. Our videography packages include cinematic wedding films, event coverage, and highlight reels with professional editing."
    },
    {
      question: "What is your cancellation and refund policy?",
      answer: "We offer flexible cancellation policies. Full refunds are available up to 30 days before the event. Within 30 days, we offer partial refunds or rescheduling options."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <Logo showTagline={true} className="text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Making Your Special Moments
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Last Forever</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Professional wedding photography and videography services that capture 
              the essence of your most precious moments with artistic excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/packages"
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4 rounded-full flex items-center space-x-2 text-white font-medium transition-colors"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-lg px-8 py-4 rounded-full flex items-center space-x-2 border transition-colors">
                <Play className="w-5 h-5" />
                <span>Watch Showreel</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-purple-400">Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Professional photography and videography services tailored to capture your special moments with artistic excellence.
            </p>
            <div className="w-24 h-1 bg-purple-400 mx-auto mt-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700 text-center hover:bg-gray-800/70 transition-colors"
              >
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              📅 Recent <span className="text-purple-400">Events</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our latest photography and videography projects from recent events
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['All', 'Photography', 'Videography'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Event Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.category === 'Photography' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-300 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-purple-400">Packages</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the perfect package for your special event. All packages include professional editing and online gallery.
            </p>
            <div className="w-24 h-1 bg-purple-400 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border ${
                  pkg.popular ? 'border-purple-500' : 'border-gray-700'
                } text-center hover:bg-gray-800/70 transition-colors relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{pkg.title}</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">{pkg.price}</div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-medium transition-colors">
                  Choose Package
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Special Discount</h3>
            </div>
            <p className="text-white/90 mb-4">Use code <span className="font-bold text-yellow-300">EVENT360</span> for 20% off your first booking!</p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Get Discount
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Event 360 Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Event 360</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're committed to delivering exceptional photography and videography services with unmatched quality and professionalism.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Professional Team", description: "All photographers are certified professionals with years of experience in capturing life's precious moments." },
              { title: "Secure Bookings", description: "Your information and bookings are always protected with industry-standard security measures." },
              { title: "Direct Communication", description: "Easily connect with our team and get instant updates on your event planning progress." },
              { title: "Quality Guarantee", description: "We guarantee high-quality photos and videos or your money back - your satisfaction is our priority." }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700 text-center hover:bg-gray-800/70 transition-colors"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get answers to common questions about our photography and videography services
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
