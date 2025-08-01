import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Camera, 
  Video, 
  Clock, 
  Users, 
  Calendar,
  MapPin,
  Heart,
  Share2,
  BookOpen,
  CheckCircle
} from 'lucide-react';

const Packages = () => {
  const [selectedType, setSelectedType] = useState('all');

  // Updated packages data with Bengali designs
  const packages = [
    {
      id: 1,
      title: "দুলহা দুলহান",
      subtitle: "Dulha Dulhan",
      package_type: "wedding",
      description: "Comprehensive wedding photography and videography package with full coverage",
      price: "২৮,০০০৳",
      priceEn: "28,000 Taka",
      image: "https://images.unsplash.com/photo-1519741497674-611863552?w=400&h=300&fit=crop",
      bgColor: "from-blue-900 to-purple-900",
      borderColor: "border-blue-500",
      popular: true,
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
      ]
    },
    {
      id: 2,
      title: "সানাই",
      subtitle: "Sanai",
      package_type: "wedding",
      description: "Traditional wedding package with essential coverage and professional editing",
      price: "২০,০০০৳",
      priceEn: "20,000 Taka",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      bgColor: "from-green-800 to-teal-700",
      borderColor: "border-green-500",
      popular: false,
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
      ]
    },
    {
      id: 3,
      title: "পালকি",
      subtitle: "Palki",
      package_type: "wedding",
      description: "Elegant wedding package with traditional elements and modern coverage",
      price: "১৫,০০০৳",
      priceEn: "15,000 Taka",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=300&fit=crop",
      bgColor: "from-teal-800 to-green-700",
      borderColor: "border-teal-500",
      popular: false,
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
      ]
    },
    {
      id: 4,
      title: "সাত পাকে বাঁধা",
      subtitle: "Sāt Pāke Bādhā",
      package_type: "wedding",
      description: "Traditional seven-knot wedding package with complete ritual coverage",
      price: "২৫,০০০৳",
      priceEn: "25,000 Taka",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      bgColor: "from-purple-800 to-pink-700",
      borderColor: "border-purple-500",
      popular: false,
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
      ]
    },
    {
      id: 5,
      title: "শুভ",
      subtitle: "Shubho",
      package_type: "wedding",
      description: "Auspicious wedding package with comprehensive coverage and premium features",
      price: "৩০,০০০৳",
      priceEn: "30,000 Taka",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      bgColor: "from-green-700 to-blue-800",
      borderColor: "border-green-500",
      popular: false,
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
      ]
    },
    {
      id: 6,
      title: "লগ্ন",
      subtitle: "Lagna",
      package_type: "wedding",
      description: "Premium wedding package with complete coverage and luxury features",
      price: "৩৮,০০০৳",
      priceEn: "38,000 Taka",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      bgColor: "from-red-800 to-pink-700",
      borderColor: "border-red-500",
      popular: false,
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
      ]
    }
  ];

  const packageTypes = [
    { id: 'all', label: 'All Packages' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'birthday', label: 'Birthdays' },
    { id: 'anniversary', label: 'Anniversaries' },
    { id: 'graduation', label: 'Graduations' }
  ];

  const filteredPackages = packages.filter(pkg => {
    return selectedType === 'all' || pkg.package_type === selectedType;
  });

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Packages</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Choose from our carefully crafted packages designed to capture your special moments with professional excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="glass-effect p-6 mb-8 rounded-2xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {packageTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedType === type.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPackages.map((pkg) => (
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
                <p className="text-white/80 text-sm mb-4">{pkg.description}</p>
                
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
        </motion.div>

        {/* Empty State */}
        {filteredPackages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                No packages found
              </h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your filters to find the perfect package for your event.
              </p>
              <button
                onClick={() => setSelectedType('all')}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Packages; 