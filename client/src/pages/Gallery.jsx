import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Play,
  Heart,
  Share2,
  Filter,
  Search
} from 'lucide-react';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Sarah & John's Wedding",
      type: "wedding",
      date: "2024-01-15",
      location: "Grand Plaza Hotel, New York",
      thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instagramLink: "https://instagram.com/event360",
      facebookLink: "https://facebook.com/event360",
      youtubeLink: "https://youtube.com/event360",
      likes: 245,
      shares: 89,
      isVideo: false
    },
    {
      id: 2,
      title: "Corporate Event 2024",
      type: "corporate",
      date: "2024-01-20",
      location: "Tech Conference Center, San Francisco",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instagramLink: "https://instagram.com/event360",
      facebookLink: "https://facebook.com/event360",
      youtubeLink: "https://youtube.com/event360",
      likes: 189,
      shares: 67,
      isVideo: true
    },
    {
      id: 3,
      title: "Birthday Celebration",
      type: "birthday",
      date: "2024-01-25",
      location: "Private Villa, Miami",
      thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instagramLink: "https://instagram.com/event360",
      facebookLink: "https://facebook.com/event360",
      youtubeLink: "https://youtube.com/event360",
      likes: 156,
      shares: 43,
      isVideo: false
    },
    {
      id: 4,
      title: "Product Launch Event",
      type: "corporate",
      date: "2024-02-01",
      location: "Innovation Hub, Austin",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instagramLink: "https://instagram.com/event360",
      facebookLink: "https://facebook.com/event360",
      youtubeLink: "https://youtube.com/event360",
      likes: 312,
      shares: 124,
      isVideo: true
    },
    {
      id: 5,
      title: "Anniversary Party",
      type: "anniversary",
      date: "2024-02-10",
      location: "Garden Venue, Los Angeles",
      thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instagramLink: "https://instagram.com/event360",
      facebookLink: "https://facebook.com/event360",
      youtubeLink: "https://youtube.com/event360",
      likes: 278,
      shares: 95,
      isVideo: false
    },
    {
      id: 6,
      title: "Graduation Ceremony",
      type: "graduation",
      date: "2024-02-15",
      location: "University Auditorium, Boston",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instagramLink: "https://instagram.com/event360",
      facebookLink: "https://facebook.com/event360",
      youtubeLink: "https://youtube.com/event360",
      likes: 203,
      shares: 78,
      isVideo: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'birthday', label: 'Birthdays' },
    { id: 'anniversary', label: 'Anniversaries' },
    { id: 'graduation', label: 'Graduations' }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesFilter = selectedFilter === 'all' || item.type === selectedFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
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
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our collection of stunning events, captured moments, and cinematic videos that tell your unique story.
            </p>
          </motion.div>
        </div>
      </div>

             {/* Search and Filter Section */}
       <div className="container mx-auto px-4 py-8">
         <div className="bg-white/70 backdrop-blur-sm p-6 mb-8 rounded-2xl shadow-xl border border-white/20">
           <div className="flex flex-col md:flex-row gap-4 items-center">
             {/* Search Bar */}
             <div className="relative flex-1">
               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
               <input
                 type="text"
                 placeholder="Search events, locations..."
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
               />
             </div>

                         {/* Filter Buttons */}
             <div className="flex flex-wrap gap-2">
               {filters.map((filter) => (
                 <button
                   key={filter.id}
                   onClick={() => setSelectedFilter(filter.id)}
                   className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                     selectedFilter === filter.id
                       ? 'bg-purple-600 text-white shadow-lg'
                       : 'bg-white/50 text-gray-700 hover:bg-white/80 hover:text-gray-900'
                   }`}
                 >
                   {filter.label}
                 </button>
               ))}
             </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Image/Video Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Video Overlay */}
                  {item.isVideo && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Play className="w-8 h-8 text-white" fill="white" />
                      </div>
                    </div>
                  )}

                  {/* Event Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-300 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{item.location}</span>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mb-4">
                    <a
                      href={item.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:scale-110 transition-transform"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={item.facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-lg hover:scale-110 transition-transform"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={item.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-red-600 text-white rounded-lg hover:scale-110 transition-transform"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        <span>{item.shares}</span>
                      </div>
                    </div>
                    
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                No events found
              </h3>
                              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedFilter('all');
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

export default Gallery; 