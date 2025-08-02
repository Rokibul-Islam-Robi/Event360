import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PackageManager from '../components/PackageManager';

const Packages = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [packages, setPackages] = useState([]);

  // Load packages from localStorage
  useEffect(() => {
    const savedPackages = localStorage.getItem('event360_packages');
    if (savedPackages) {
      setPackages(JSON.parse(savedPackages));
    } else {
      // Default packages if none exist
      const defaultPackages = [
        {
          id: 1,
          title: "দুলহা দুলহান",
          subtitle: "Dulha Dulhan",
          package_type: "wedding",
          description: "Comprehensive wedding photography and videography package with full coverage",
          price: "২৮,০০০৳",
          priceEn: "28,000 Taka",
          image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxZTI5NTQ7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM3MzA2NztzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB4PSI1MCIgeT0iNTAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSIyMDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjY2NhMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7gmbDgmbDgmbDgmbD4g4Jmw4Jmw4Jmw4Jmw4JmwPC90ZXh0Pgo8dGV4dCB4PSIyMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7gmbDgmbDgmbDgmbD4g4Jmw4Jmw4Jmw4Jmw4JmwPC90ZXh0Pgo8L3N2Zz4K",
          bgColor: "from-blue-900 to-purple-900",
          borderColor: "border-blue-500",
          popular: true,
          features: [
            "একজন চীফ ফটোগ্রাফার",
            "একজন সিনিয়র ফটোগ্রাফার", 
            "একজন চীফ সিনেমাটোগ্রাফার",
            "একজন সিনিয়র সিনেমাটোগ্রাফার",
            "১০০ কপি প্রিন্ট",
            "একটি ট্রেইলার",
            "একটি ফটো ফ্রেম",
            "একটি পেন্ড্রাইভ"
          ],
          featuresEn: [
            "One Chief Photographer",
            "One Senior Photographer",
            "One Chief Cinematographer", 
            "One Senior Cinematographer",
            "100 Copies Print",
            "One Trailer",
            "One Photo Frame",
            "One Pendrive"
          ]
        }
      ];
      setPackages(defaultPackages);
      localStorage.setItem('event360_packages', JSON.stringify(defaultPackages));
    }
  }, []);

  // Save packages to localStorage whenever packages change
  useEffect(() => {
    localStorage.setItem('event360_packages', JSON.stringify(packages));
  }, [packages]);

  const packageTypes = [
    { id: 'all', label: 'All Packages' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'birthday', label: 'Birthdays' },
    { id: 'anniversary', label: 'Anniversaries' },
    { id: 'graduation', label: 'Graduations' }
  ];

  const filteredPackages = packages.filter(pkg => {
    return selectedType === 'all' || pkg.package_type === selectedType;
  });

  const handleAddPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  const handleEditPackage = (updatedPackage) => {
    setPackages(packages.map(pkg => pkg.id === updatedPackage.id ? updatedPackage : pkg));
  };

  const handleDeletePackage = (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      setPackages(packages.filter(pkg => pkg.id !== id));
    }
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Packages</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Choose from our carefully crafted packages designed to capture your special moments with professional excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="glass-effect p-6 mb-8 rounded-2xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {packageTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedType === type.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Package Manager */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <PackageManager
            packages={filteredPackages}
            onAddPackage={handleAddPackage}
            onEditPackage={handleEditPackage}
            onDeletePackage={handleDeletePackage}
          />
        </motion.div>

        {/* Empty State */}
        {filteredPackages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                No packages found
              </h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your filters or add a new package to get started.
              </p>
              <button
                onClick={() => setSelectedType('all')}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors mr-4"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Packages; 