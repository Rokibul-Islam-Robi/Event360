import React from 'react'
import { Camera } from 'lucide-react'

const Logo = ({ className = "", showTagline = true }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Left Sparkle */}
      <div className="flex flex-col space-y-1">
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>
      
      {/* Main Logo Text */}
      <div className="flex items-center space-x-2">
        <span className="text-white font-bold text-xl tracking-wide">EVENT</span>
        <span className="text-white font-bold text-xl tracking-wide">360</span>
      </div>
      
      {/* Camera Icon */}
      <div className="relative">
        <Camera className="w-6 h-6 text-white" />
        {/* Flash unit on top of camera */}
        <div className="absolute -top-1 -right-1 w-3 h-2 bg-white rounded-sm"></div>
      </div>
      
      {/* Right Sparkle */}
      <div className="flex flex-col space-y-1">
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>
      
      {/* Tagline */}
      {showTagline && (
        <div className="ml-4 border-l border-white/30 pl-4">
          <p className="text-white/80 text-xs font-medium tracking-wide uppercase">
            MAKE YOUR MOMENT SPECIAL
          </p>
        </div>
      )}
    </div>
  )
}

export default Logo 