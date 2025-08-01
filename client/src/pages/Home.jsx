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
      title: "দুলহা দুলহান",
      subtitle: "Dulha Dulhan",
      price: "২৮,০০০৳",
      priceEn: "28,000 Taka",
      image: "https://images.unsplash.com/photo-1519741497674-611863552?w=400&h=300&fit=crop",
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
    },
    {
      title: "সানাই",
      subtitle: "Sanai",
      price: "২০,০০০৳",
      priceEn: "20,000 Taka",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      features: [
        "একজন চীফ ফটোগ্রাফার",
        "একজন জুনিয়র ফটোগ্রাফার",
        "একজন সিনেমাটোগ্রাফার",
        "১০০ কপি প্রিন্ট",
        "একটি ট্রেইলার",
        "একটি পেন্ড্রাইভ"
      ],
      featuresEn: [
        "One Chief Photographer",
        "One Junior Photographer",
        "One Cinematographer",
        "100 Copies Print", 
        "One Trailer",
        "One Pendrive"
      ],
      popular: false,
      bgColor: "from-green-800 to-teal-700",
      borderColor: "border-green-500"
    },
    {
      title: "পালকি",
      subtitle: "Palki",
      price: "১৫,০০০৳",
      priceEn: "15,000 Taka",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=300&fit=crop",
      features: [
        "একজন সিনিয়র ফটোগ্রাফার",
        "একজন সিনেমাটোগ্রাফার",
        "৫০ কপি প্রিন্ট",
        "একটি পেন্ড্রাইভ"
      ],
      featuresEn: [
        "One Senior Photographer",
        "One Cinematographer",
        "50 Copies Print",
        "One Pendrive"
      ],
      popular: false,
      bgColor: "from-teal-800 to-green-700",
      borderColor: "border-teal-500"
    },
    {
      title: "সাত পাকে বাঁধা",
      subtitle: "Sāt Pāke Bādhā",
      price: "২৫,০০০৳",
      priceEn: "25,000 Taka",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      features: [
        "একজন সিনিয়র ফটোগ্রাফার",
        "একজন জুনিয়র ফটোগ্রাফার",
        "একজন সিনেমাটোগ্রাফার",
        "৫০ কপি প্রিন্ট",
        "একটি পেন্ড্রাইভ"
      ],
      featuresEn: [
        "One Senior Photographer",
        "One Junior Photographer",
        "One Cinematographer",
        "50 Copies Print",
        "One Pendrive"
      ],
      popular: false,
      bgColor: "from-purple-800 to-pink-700",
      borderColor: "border-purple-500"
    },
    {
      title: "শুভ",
      subtitle: "Shubho",
      price: "৩০,০০০৳",
      priceEn: "30,000 Taka",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      features: [
        "একজন চীফ ফটোগ্রাফার",
        "একজন সিনিয়র ফটোগ্রাফার",
        "একজন চীফ সিনেমাটোগ্রাফার",
        "একটি ট্রেইলার",
        "১০০ কপি প্রিন্ট",
        "একটি পেন্ড্রাইভ",
        "একটি ফটো এলবাম"
      ],
      featuresEn: [
        "One Chief Photographer",
        "One Senior Photographer",
        "One Chief Cinematographer",
        "One Trailer",
        "100 Copies Print",
        "One Pendrive",
        "One Photo Album"
      ],
      popular: false,
      bgColor: "from-green-700 to-blue-800",
      borderColor: "border-green-500"
    },
    {
      title: "লগ্ন",
      subtitle: "Lagna",
      price: "৩৮,০০০৳",
      priceEn: "38,000 Taka",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      features: [
        "একজন চীফ ফটোগ্রাফার",
        "একজন সিনিয়র ফটোগ্রাফার",
        "একজন চীফ সিনেমাটোগ্রাফার",
        "একজন সিনিয়র সিনেমাটোগ্রাফার",
        "একটি ট্রেইলার",
        "১০০ কপি প্রিন্ট",
        "একটি পেন্ড্রাইভ",
        "একটি ফটো এলবাম",
        "একটি ফটো ফ্রেম"
      ],
      featuresEn: [
        "One Chief Photographer",
        "One Senior Photographer",
        "One Chief Cinematographer",
        "One Senior Cinematographer",
        "One Trailer",
        "100 Copies Print",
        "One Pendrive",
        "One Photo Album",
        "One Photo Frame"
      ],
      popular: false,
      bgColor: "from-red-800 to-pink-700",
      borderColor: "border-red-500"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-white text-sm flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-medium transition-all duration-300 border border-white/30 hover:border-white/50">
                    Choose Package
                  </button>
                </div>
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
