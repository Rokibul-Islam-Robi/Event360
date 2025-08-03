import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Palette, 
  Upload, 
  Save, 
  RotateCcw, 
  Eye,
  Settings,
  Image as ImageIcon,
  Trash2
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const ManageBackground = () => {
  const { isAdmin } = useAuth()
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [settings, setSettings] = useState({
    backgroundType: 'image', // 'image', 'gradient', 'video'
    overlayOpacity: 0.5,
    blurAmount: 0,
    animationSpeed: 'normal'
  })

  // Redirect if not admin
  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleSave = () => {
    // Here you would typically save the settings to your backend
    console.log('Saving background settings:', { selectedFile, settings })
    // You can implement the actual save logic here
  }

  const handleReset = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    setSettings({
      backgroundType: 'image',
      overlayOpacity: 0.5,
      blurAmount: 0,
      animationSpeed: 'normal'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Palette className="w-8 h-8 text-purple-400" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Manage Background
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Customize the website background and visual settings
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Settings Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <Settings className="w-6 h-6" />
              <span>Background Settings</span>
            </h2>

            {/* Background Type */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-3">Background Type</label>
              <div className="grid grid-cols-3 gap-3">
                {['image', 'gradient', 'video'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSettings({ ...settings, backgroundType: type })}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.backgroundType === type
                        ? 'border-purple-500 bg-purple-500/20 text-white'
                        : 'border-white/20 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* File Upload */}
            {settings.backgroundType === 'image' && (
              <div className="mb-6">
                <label className="block text-white font-medium mb-3">Upload Background Image</label>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-white/40 transition-colors duration-200">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="background-upload"
                  />
                  <label htmlFor="background-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-300">Click to upload or drag and drop</p>
                    <p className="text-gray-400 text-sm">PNG, JPG, GIF up to 10MB</p>
                  </label>
                </div>
              </div>
            )}

            {/* Overlay Opacity */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-3">
                Overlay Opacity: {settings.overlayOpacity}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={settings.overlayOpacity}
                onChange={(e) => setSettings({ ...settings, overlayOpacity: parseFloat(e.target.value) })}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Blur Amount */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-3">
                Blur Amount: {settings.blurAmount}px
              </label>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={settings.blurAmount}
                onChange={(e) => setSettings({ ...settings, blurAmount: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Animation Speed */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-3">Animation Speed</label>
              <select
                value={settings.animationSpeed}
                onChange={(e) => setSettings({ ...settings, animationSpeed: e.target.value })}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="slow">Slow</option>
                <option value="normal">Normal</option>
                <option value="fast">Fast</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleSave}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>Save Changes</span>
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center space-x-2"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset</span>
              </button>
            </div>
          </motion.div>

          {/* Preview Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <Eye className="w-6 h-6" />
              <span>Preview</span>
            </h2>

            <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              {previewUrl && settings.backgroundType === 'image' ? (
                <img
                  src={previewUrl}
                  alt="Background preview"
                  className="w-full h-full object-cover"
                  style={{
                    filter: `blur(${settings.blurAmount}px)`,
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-white/50" />
                </div>
              )}
              
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: settings.overlayOpacity }}
              />
              
              {/* Sample Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">Sample Content</h3>
                  <p className="text-sm opacity-80">This is how your content will appear</p>
                </div>
              </div>
            </div>

            {/* File Info */}
            {selectedFile && (
              <div className="mt-4 p-4 bg-white/10 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ImageIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-white text-sm">{selectedFile.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedFile(null)
                      setPreviewUrl(null)
                    }}
                    className="text-red-400 hover:text-red-300 transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-gray-400 text-xs mt-1">
                  Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ManageBackground 