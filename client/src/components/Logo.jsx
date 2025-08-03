import React from 'react'

const Logo = ({ className = "", showTagline = true }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Main Logo Container */}
      <div className="flex items-center justify-center relative">
        {/* Left Sparkle/Burst Lines */}
        <div className="flex flex-col space-y-1 mr-4">
          <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
          <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
          <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
        </div>
        
        {/* Main Logo Text */}
        <div className="flex items-center">
          <span className="text-orange-500 font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide">EVENT</span>
          <span className="text-orange-500 font-bold text-3xl md:text-4xl lg:text-5xl tracking-wide">360</span>
        </div>
        
        {/* Camera Icon - Positioned above and to the right of "360" */}
        <div className="relative ml-2">
          <svg 
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-orange-500" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Camera Body */}
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            {/* Camera Lens */}
            <circle cx="12" cy="13" r="4"/>
            {/* Flash/Hot Shoe Mount */}
            <rect x="9" y="2" width="6" height="2" rx="1"/>
          </svg>
        </div>
        
        {/* Right Sparkle/Burst Lines */}
        <div className="flex flex-col space-y-1 ml-4">
          <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
          <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
          <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
        </div>
      </div>
      
      {/* Tagline */}
      {showTagline && (
        <div className="mt-2">
          <p className="text-orange-500 text-xs md:text-sm font-medium tracking-widest uppercase">
            MAKE YOUR MOMENT SPECIAL
          </p>
        </div>
      )}
    </div>
  )
}

export default Logo 