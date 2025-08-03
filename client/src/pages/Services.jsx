import React from 'react'
import { motion } from 'framer-motion'
import { 
  Camera, 
  Video, 
  Music, 
  Lightbulb, 
  Users, 
  Calendar,
  Star,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional event photography with high-quality equipment and experienced photographers.',
      features: ['Event Coverage', 'Photo Editing', 'Digital Delivery', 'Print Options']
    },
    {
      icon: Video,
      title: 'Videography',
      description: 'Complete video production services for your special moments.',
      features: ['Event Recording', 'Video Editing', 'Highlight Reels', '4K Quality']
    },
    {
      icon: Music,
      title: 'Audio Services',
      description: 'Professional sound systems and audio equipment for events.',
      features: ['Sound Systems', 'Microphones', 'DJ Equipment', 'Live Music Setup']
    },
    {
      icon: Lightbulb,
      title: 'Lighting',
      description: 'Creative lighting solutions to enhance your event atmosphere.',
      features: ['LED Lighting', 'Stage Lighting', 'Ambient Lighting', 'Color Effects']
    },
    {
      icon: Users,
      title: 'Event Planning',
      description: 'Comprehensive event planning and coordination services.',
      features: ['Venue Selection', 'Timeline Management', 'Vendor Coordination', 'Day-of Coordination']
    },
    {
      icon: Calendar,
      title: 'Equipment Rental',
      description: 'High-quality equipment rental for all your event needs.',
      features: ['Camera Equipment', 'Lighting Gear', 'Audio Systems', 'Backup Equipment']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive event services to make your special moments unforgettable
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/20"
        >
          <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let us help you bring your vision to life with our comprehensive event services.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Services 