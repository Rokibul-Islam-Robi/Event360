import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import HeroBackgroundManager from '../components/HeroBackgroundManager'

const ManageBackground = () => {
  const { isAdmin } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(true)

  // Redirect if not admin
  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  const handleBackgroundChange = (background) => {
    // Handle background changes
    console.log('Background changed:', background)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Navigate back to home or dashboard
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Background Manager */}
      <HeroBackgroundManager 
        onBackgroundChange={handleBackgroundChange}
        isModalOpen={isModalOpen}
        onCloseModal={handleCloseModal}
      />
    </div>
  )
}

export default ManageBackground 