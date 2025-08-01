import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Camera, 
  Video, 
  Users, 
  Package,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
  Edit,
  Plus,
  Download,
  Share2,
  Heart,
  Star,
  BookOpen,
  Settings,
  Bell,
  User,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data based on user role
  const getDashboardData = () => {
    if (user?.role === 'admin') {
      return {
        stats: [
          { title: 'Total Events', value: '24', icon: Calendar, color: 'blue', change: '+12%' },
          { title: 'Active Bookings', value: '18', icon: CheckCircle, color: 'green', change: '+8%' },
          { title: 'Revenue', value: '$45,230', icon: DollarSign, color: 'purple', change: '+15%' },
          { title: 'Team Members', value: '12', icon: Users, color: 'orange', change: '+2' }
        ]
      };
    } else if (user?.role === 'team') {
      return {
        stats: [
          { title: 'My Events', value: '8', icon: Calendar, color: 'blue', change: '+2' },
          { title: 'Hours This Month', value: '64', icon: Clock, color: 'green', change: '+12h' },
          { title: 'Photos Taken', value: '1,240', icon: Camera, color: 'purple', change: '+180' },
          { title: 'Videos Created', value: '12', icon: Video, color: 'orange', change: '+3' }
        ]
      };
    } else {
      return {
        stats: [
          { title: 'My Bookings', value: '3', icon: Calendar, color: 'blue', change: '+1' },
          { title: 'Total Spent', value: '$3,997', icon: DollarSign, color: 'green', change: '+$1,499' },
          { title: 'Photos Received', value: '450', icon: Camera, color: 'purple', change: '+200' },
          { title: 'Videos Received', value: '4', icon: Video, color: 'orange', change: '+2' }
        ]
      };
    }
  };

  const dashboardData = getDashboardData();
  const tabs = user?.role === 'admin' 
    ? ['overview', 'events', 'bookings', 'team', 'reports']
    : user?.role === 'team'
    ? ['overview', 'my-events', 'uploads', 'schedule']
    : ['overview', 'my-bookings', 'media', 'offers'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500 text-blue-100',
      green: 'bg-green-500 text-green-100',
      purple: 'bg-purple-500 text-purple-100',
      orange: 'bg-orange-500 text-orange-100'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user?.first_name || 'User'}!
              </h1>
              <p className="text-gray-600 mt-1">
                {user?.role === 'admin' ? 'Manage your events and team' :
                 user?.role === 'team' ? 'Track your assignments and uploads' :
                 'Manage your bookings and view your media'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/50 text-gray-700 hover:bg-white/80'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardData.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <motion.div variants={itemVariants} className="glass-card p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  {user?.role === 'admin' ? 'Recent Activity' :
                   user?.role === 'team' ? 'My Upcoming Events' :
                   'My Recent Bookings'}
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 rounded-lg">
                    <h3 className="font-semibold text-gray-900">Sample Event/Booking</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      This is a placeholder for actual data that will be loaded from the backend.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <motion.div variants={itemVariants} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {user?.role === 'admin' && (
                    <>
                      <button className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                        <Plus className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-600 font-medium">Add New Event</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                        <Users className="w-5 h-5 text-green-600" />
                        <span className="text-green-600 font-medium">Manage Team</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-600 font-medium">View Reports</span>
                      </button>
                    </>
                  )}
                  {user?.role === 'team' && (
                    <>
                      <button className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                        <Camera className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-600 font-medium">Upload Photos</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                        <Video className="w-5 h-5 text-green-600" />
                        <span className="text-green-600 font-medium">Upload Videos</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-600 font-medium">View Schedule</span>
                      </button>
                    </>
                  )}
                  {user?.role === 'customer' && (
                    <>
                      <button className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                        <Package className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-600 font-medium">Book New Event</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                        <Download className="w-5 h-5 text-green-600" />
                        <span className="text-green-600 font-medium">Download Media</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                        <Share2 className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-600 font-medium">Share Gallery</span>
                      </button>
                    </>
                  )}
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div variants={itemVariants} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Camera className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Sample Activity</p>
                      <p className="text-xs text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard; 