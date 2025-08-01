import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Camera, Video, Settings } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>
          <p className="text-gray-600">Profile page coming soon...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile; 