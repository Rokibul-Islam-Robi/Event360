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
  Palette,
  User,
  LogOut
} from 'lucide-react'

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, isAdmin, logout } = useAuth()
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Package },
    { name: 'Contact', path: '/contact', icon: Phone },
  ]

  const isActive = (path) => location.pathname === path

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    logout()
    setIsOpen(false)
  }

  return (
    <>
      {/* Burger Menu Button */}
      <button
        onClick={handleMenuToggle}
        className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
      >
        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </motion.div>
      </button>

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
              className="fixed top-16 left-0 h-full w-80 max-w-[80vw] bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border-r border-white/20 z-50 shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Main Navigation */}
              <div className="p-6 space-y-4">
                {/* Primary Navigation */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Navigation
                  </h3>
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
                          className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 font-medium group ${
                            isActive(item.path)
                              ? 'text-white bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 shadow-lg'
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <div className={`p-2 rounded-lg transition-all duration-200 ${
                            isActive(item.path)
                              ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                              : 'bg-gray-700 group-hover:bg-gray-600'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-base">{item.name}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Admin Section */}
                {isAdmin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: navItems.length * 0.1,
                      duration: 0.3 
                    }}
                    className="pt-4 border-t border-white/10"
                  >
                    <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">
                      Admin
                    </h3>
                    <Link
                      to="/manage-background"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 font-medium text-purple-300 hover:text-purple-200 hover:bg-purple-500/20 group"
                    >
                      <div className="p-2 rounded-lg bg-purple-600 group-hover:bg-purple-500 transition-all duration-200">
                        <Palette className="w-4 h-4" />
                      </div>
                      <span className="text-base">Manage Background</span>
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
                    className="pt-4 border-t border-white/10"
                  >
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                      Account
                    </h3>
                    <div className="flex items-center space-x-3 px-4 py-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{user?.name || 'User'}</p>
                        <p className="text-gray-400 text-sm">{user?.email}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Link
                        to="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <div className="p-2 rounded-lg bg-gray-700">
                          <Settings className="w-4 h-4" />
                        </div>
                        <span className="text-base">Dashboard</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-4 px-4 py-3 rounded-xl text-gray-300 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 w-full"
                      >
                        <div className="p-2 rounded-lg bg-gray-700">
                          <LogOut className="w-4 h-4" />
                        </div>
                        <span className="text-base">Logout</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Auth Section */}
                {!isAuthenticated && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: navItems.length * 0.1,
                      duration: 0.3 
                    }}
                    className="pt-4 border-t border-white/10"
                  >
                    <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-4">
                      Account
                    </h3>
                    <div className="space-y-3">
                      <Link
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center px-4 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-200 font-medium"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium shadow-lg"
                      >
                        Register
                      </Link>
                    </div>
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