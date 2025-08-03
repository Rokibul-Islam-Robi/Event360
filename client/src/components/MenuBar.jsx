import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { 
  Menu, 
  X, 
  Home,
  Settings,
  Package,
  Phone,
  Camera,
  Palette
} from 'lucide-react'
import Logo from './Logo'

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, isAdmin } = useAuth()
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Package },
    { name: 'Packages', path: '/packages', icon: Package },
    { name: 'Contact', path: '/contact', icon: Phone },
  ]

  const isActive = (path) => location.pathname === path

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Burger Menu Button */}
      <button
        onClick={handleMenuToggle}
        className="fixed left-6 z-50 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-black/60 transition-all duration-300 group"
        style={{ top: '80px' }}
      >
        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </button>

      {/* MenuBar Logo - positioned below Navbar */}
      <div className="fixed left-6 z-40" style={{ top: '80px' }}>
        <Logo showTagline={false} />
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              className="fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-black/80 backdrop-blur-xl border-r border-white/20 z-50"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="px-6 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.3 
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-4 px-4 py-4 rounded-lg transition-all duration-300 font-medium group ${
                          isActive(item.path)
                            ? 'text-white bg-white/20 shadow-lg'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-lg">{item.name}</span>
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Admin Settings Button */}
                {isAdmin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: navItems.length * 0.1,
                      duration: 0.3 
                    }}
                  >
                    <Link
                      to="/manage-background"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-4 px-4 py-4 rounded-lg transition-all duration-300 font-medium text-purple-300 hover:text-purple-200 hover:bg-purple-500/20 group"
                    >
                      <Palette className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg">Manage Background</span>
                    </Link>
                  </motion.div>
                )}

                {/* User Profile Section */}
                {isAuthenticated && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: (navItems.length + (isAdmin ? 1 : 0)) * 0.1,
                      duration: 0.3 
                    }}
                    className="pt-6 border-t border-white/20"
                  >
                    <div className="flex items-center space-x-3 px-4 py-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{user?.name || 'User'}</p>
                        <p className="text-gray-400 text-sm">{user?.email}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </nav>

              {/* Bottom Section */}
              <div className="absolute bottom-6 left-6 right-6">
                {isAuthenticated ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="space-y-3"
                  >
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                      <Settings className="w-5 h-5" />
                      <span>Dashboard</span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="space-y-3"
                  >
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                    >
                      Register
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MenuBar 