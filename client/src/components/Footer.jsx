import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Camera, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Wedding Photography', href: '/packages' },
      { name: 'Event Videography', href: '/packages' },
      { name: 'Equipment Rental', href: '/equipment-rental' },
      { name: 'Photo Editing', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'FAQ', href: '/faq' },
    ],
  }

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/event360' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/event360' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/event360' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/event360' },
  ]

  return (
    <footer className="bg-gray-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              {/* Minimized Logo */}
              <div className="transform hover:scale-105 transition-transform duration-200">
                <Logo compact={true} />
              </div>
              {/* Tagline */}
              <p className="text-orange-500 text-xs font-medium tracking-widest uppercase">
                MAKE YOUR MOMENT SPECIAL
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Making your special moments last forever. Professional wedding photography 
              and videography services with a passion for capturing life's beautiful memories.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="group-hover:text-white transition-colors duration-200">+880 1234-567890</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="group-hover:text-white transition-colors duration-200">info@event360.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-gray-300 group">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="group-hover:text-white transition-colors duration-200">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-medium">
              © {currentYear} Event 360. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 