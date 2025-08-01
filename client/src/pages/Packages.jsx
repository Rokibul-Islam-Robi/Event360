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
  BookOpen
} from 'lucide-react';

const Packages = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Mock data for packages
  const packages = [
    {
      id: 1,
      name: "Basic Wedding Package",
      package_type: "wedding",
      difficulty_level: "basic",
      description: "Perfect for intimate weddings with essential coverage",
      price: 999,
      duration_hours: 6,
      max_photos: 200,
      max_videos: 1,
      thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      is_active: true,
      average_rating: 4.5,
      review_count: 28,
      features: [
        { title: "6 Hours Coverage", description: "Complete event coverage", icon: "clock", is_included: true },
        { title: "200+ Photos", description: "High-resolution edited photos", icon: "camera", is_included: true },
        { title: "1 Cinematic Video", description: "3-5 minute highlight video", icon: "video", is_included: true },
        { title: "Online Gallery", description: "Digital delivery within 2 weeks", icon: "gallery", is_included: true },
        { title: "Engagement Session", description: "Pre-wedding photo session", icon: "heart", is_included: false },
        { title: "Second Photographer", description: "Additional photographer", icon: "users", is_included: false }
      ]
    },
    {
      id: 2,
      name: "Premium Wedding Package",
      package_type: "wedding",
      difficulty_level: "premium",
      description: "Comprehensive coverage for your special day with premium features",
      price: 2499,
      duration_hours: 12,
      max_photos: 500,
      max_videos: 3,
      thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
      is_active: true,
      average_rating: 4.8,
      review_count: 45,
      features: [
        { title: "12 Hours Coverage", description: "Full day coverage", icon: "clock", is_included: true },
        { title: "500+ Photos", description: "Premium edited photos", icon: "camera", is_included: true },
        { title: "3 Cinematic Videos", description: "Highlight, ceremony, and reception videos", icon: "video", is_included: true },
        { title: "Online Gallery", description: "Digital delivery within 1 week", icon: "gallery", is_included: true },
        { title: "Engagement Session", description: "Pre-wedding photo session", icon: "heart", is_included: true },
        { title: "Second Photographer", description: "Additional photographer", icon: "users", is_included: true }
      ]
    },
    {
      id: 3,
      name: "Corporate Event Package",
      package_type: "corporate",
      difficulty_level: "premium",
      description: "Professional coverage for corporate events and conferences",
      price: 1499,
      duration_hours: 8,
      max_photos: 300,
      max_videos: 2,
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      is_active: true,
      average_rating: 4.6,
      review_count: 32,
      features: [
        { title: "8 Hours Coverage", description: "Full event coverage", icon: "clock", is_included: true },
        { title: "300+ Photos", description: "Professional event photos", icon: "camera", is_included: true },
        { title: "2 Videos", description: "Event highlights and presentations", icon: "video", is_included: true },
        { title: "Live Streaming", description: "Real-time event streaming", icon: "stream", is_included: true },
        { title: "Brand Integration", description: "Custom branding in media", icon: "brand", is_included: true },
        { title: "Social Media Content", description: "Ready-to-post content", icon: "social", is_included: true }
      ]
    },
    {
      id: 4,
      name: "Birthday Celebration",
      package_type: "birthday",
      difficulty_level: "basic",
      description: "Capture your special birthday moments with style",
      price: 399,
      duration_hours: 4,
      max_photos: 100,
      max_videos: 1,
      thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
      is_active: true,
      average_rating: 4.3,
      review_count: 19,
      features: [
        { title: "4 Hours Coverage", description: "Party coverage", icon: "clock", is_included: true },
        { title: "100+ Photos", description: "Edited party photos", icon: "camera", is_included: true },
        { title: "1 Video", description: "Birthday highlights", icon: "video", is_included: true },
        { title: "Online Gallery", description: "Digital delivery", icon: "gallery", is_included: true },
        { title: "Props & Decor", description: "Birthday props included", icon: "props", is_included: false },
        { title: "Cake Smash", description: "Special cake smash session", icon: "cake", is_included: false }
      ]
    },
    {
      id: 5,
      name: "Anniversary Special",
      package_type: "anniversary",
      difficulty_level: "premium",
      description: "Celebrate your love story with our anniversary package",
      price: 799,
      duration_hours: 6,
      max_photos: 150,
      max_videos: 1,
      thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
      is_active: true,
      average_rating: 4.7,
      review_count: 23,
      features: [
        { title: "6 Hours Coverage", description: "Anniversary celebration", icon: "clock", is_included: true },
        { title: "150+ Photos", description: "Romantic couple photos", icon: "camera", is_included: true },
        { title: "1 Cinematic Video", description: "Love story video", icon: "video", is_included: true },
        { title: "Couple Session", description: "Romantic photo session", icon: "heart", is_included: true },
        { title: "Location Scouting", description: "Beautiful location selection", icon: "map", is_included: true },
        { title: "Custom Album", description: "Premium photo album", icon: "album", is_included: false }
      ]
    },
    {
      id: 6,
      name: "Graduation Ceremony",
      package_type: "graduation",
      difficulty_level: "basic",
      description: "Document your academic achievement with our graduation package",
      price: 299,
      duration_hours: 3,
      max_photos: 75,
      max_videos: 1,
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=400&h=300&fit=crop",
      is_active: true,
      average_rating: 4.4,
      review_count: 15,
      features: [
        { title: "3 Hours Coverage", description: "Ceremony coverage", icon: "clock", is_included: true },
        { title: "75+ Photos", description: "Graduation photos", icon: "camera", is_included: true },
        { title: "1 Video", description: "Ceremony highlights", icon: "video", is_included: true },
        { title: "Online Gallery", description: "Digital delivery", icon: "gallery", is_included: true },
        { title: "Family Photos", description: "Group family photos", icon: "users", is_included: true },
        { title: "Cap & Gown", description: "Professional graduation attire", icon: "graduation", is_included: false }
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

  const difficultyLevels = [
    { id: 'all', label: 'All Levels' },
    { id: 'basic', label: 'Basic' },
    { id: 'premium', label: 'Premium' }
  ];

  const filteredPackages = packages.filter(pkg => {
    const matchesType = selectedType === 'all' || pkg.package_type === selectedType;
    const matchesLevel = selectedLevel === 'all' || pkg.difficulty_level === selectedLevel;
    return matchesType && matchesLevel;
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

  const getIcon = (iconName) => {
    const icons = {
      clock: Clock,
      camera: Camera,
      video: Video,
      gallery: BookOpen,
      heart: Heart,
      users: Users,
      stream: Video,
      brand: BookOpen,
      social: Share2,
      props: Heart,
      cake: Heart,
      map: MapPin,
      album: BookOpen,
      graduation: Users
    };
    return icons[iconName] || BookOpen;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Packages</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Choose from our carefully crafted packages designed to capture your special moments with professional excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Package Type Filter */}
            <div className="flex flex-wrap gap-2">
              {packageTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedType === type.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white/50 text-gray-700 hover:bg-white/80'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* Difficulty Level Filter */}
            <div className="flex flex-wrap gap-2">
              {difficultyLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedLevel === level.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white/50 text-gray-700 hover:bg-white/80'
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Package Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={pkg.thumbnail}
                    alt={pkg.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Package Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                      {pkg.package_type.charAt(0).toUpperCase() + pkg.package_type.slice(1)}
                    </span>
                  </div>

                  {/* Difficulty Level Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      pkg.difficulty_level === 'premium' 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'bg-white/90 backdrop-blur-sm text-gray-700'
                    }`}>
                      {pkg.difficulty_level.charAt(0).toUpperCase() + pkg.difficulty_level.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-1">
                    {pkg.description}
                  </p>

                  {/* Package Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{pkg.duration_hours}h</div>
                      <div className="text-xs text-gray-500">Coverage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{pkg.max_photos}+</div>
                      <div className="text-xs text-gray-500">Photos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{pkg.max_videos}</div>
                      <div className="text-xs text-gray-500">Videos</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(pkg.average_rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {pkg.average_rating} ({pkg.review_count} reviews)
                    </span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <div className="space-y-2">
                      {pkg.features.slice(0, 4).map((feature, index) => {
                        const Icon = getIcon(feature.icon);
                        return (
                          <div key={index} className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                              feature.is_included ? 'bg-green-100' : 'bg-gray-100'
                            }`}>
                              {feature.is_included ? (
                                <Check className="w-3 h-3 text-green-600" />
                              ) : (
                                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                              )}
                            </div>
                            <span className={`text-sm ${
                              feature.is_included ? 'text-gray-700' : 'text-gray-400'
                            }`}>
                              {feature.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-gray-900">${pkg.price}</span>
                        <span className="text-gray-500 ml-2">USD</span>
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
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
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No packages found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to find the perfect package for your event.
              </p>
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSelectedLevel('all');
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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