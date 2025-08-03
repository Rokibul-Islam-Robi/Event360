import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import MenuBar from './components/MenuBar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Packages from './pages/Packages'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import BookEvent from './pages/BookEvent'
import EquipmentRental from './pages/EquipmentRental'
import Services from './pages/Services'
import ManageBackground from './pages/ManageBackground'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <MenuBar />
        <main className="flex-1">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/equipment-rental" element={<EquipmentRental />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/book-event" element={
              <ProtectedRoute>
                <BookEvent />
              </ProtectedRoute>
            } />
            <Route path="/manage-background" element={
              <ProtectedRoute>
                <ManageBackground />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App 