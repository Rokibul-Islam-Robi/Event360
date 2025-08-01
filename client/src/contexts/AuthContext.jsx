import React, { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../utils/api'
import toast from 'react-hot-toast'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      checkAuthStatus()
    } else {
      setLoading(false)
    }
  }, [token])

  const checkAuthStatus = async () => {
    try {
      const response = await api.get('/auth/profile/')
      setUser(response.data)
    } catch (error) {
      console.error('Auth check failed:', error)
      logout()
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login/', { email, password })
      const { tokens, user: userData } = response.data
      
      localStorage.setItem('token', tokens.access)
      localStorage.setItem('refreshToken', tokens.refresh)
      
      setToken(tokens.access)
      setUser(userData)
      
      toast.success('Login successful!')
      return { success: true }
    } catch (error) {
      const message = error.response?.data?.error || 'Login failed'
      toast.error(message)
      return { success: false, error: message }
    }
  }

  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register/', userData)
      toast.success('Registration successful! Please check your email for OTP verification.')
      return { success: true, data: response.data }
    } catch (error) {
      const message = error.response?.data?.error || 'Registration failed'
      toast.error(message)
      return { success: false, error: message }
    }
  }

  const verifyOTP = async (email, otp) => {
    try {
      const response = await api.post('/auth/verify-otp/', { email, otp })
      const { tokens, user: userData } = response.data
      
      localStorage.setItem('token', tokens.access)
      localStorage.setItem('refreshToken', tokens.refresh)
      
      setToken(tokens.access)
      setUser(userData)
      
      toast.success('Email verified successfully!')
      return { success: true }
    } catch (error) {
      const message = error.response?.data?.error || 'OTP verification failed'
      toast.error(message)
      return { success: false, error: message }
    }
  }

  const resendOTP = async (email) => {
    try {
      await api.post('/auth/resend-otp/', { email })
      toast.success('OTP sent successfully!')
      return { success: true }
    } catch (error) {
      const message = error.response?.data?.error || 'Failed to send OTP'
      toast.error(message)
      return { success: false, error: message }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    setToken(null)
    setUser(null)
    toast.success('Logged out successfully!')
  }

  const updateProfile = async (profileData) => {
    try {
      const response = await api.put('/auth/profile/', profileData)
      setUser(response.data)
      toast.success('Profile updated successfully!')
      return { success: true }
    } catch (error) {
      const message = error.response?.data?.error || 'Profile update failed'
      toast.error(message)
      return { success: false, error: message }
    }
  }

  const value = {
    user,
    loading,
    token,
    login,
    register,
    verifyOTP,
    resendOTP,
    logout,
    updateProfile,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isTeam: user?.role === 'team',
    isCustomer: user?.role === 'customer',
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
} 