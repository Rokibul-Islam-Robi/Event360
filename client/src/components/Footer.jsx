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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo showTagline={true} />
            <p className="text-gray-300 text-sm">
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
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>info@event360.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
                <span>123 Photography St, Event City, EC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Event 360. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
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