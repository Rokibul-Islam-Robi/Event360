import React, { useState } from 'react';
import { Plus, Edit, Trash2, Upload, Save, X } from 'lucide-react';

const PackageManager = ({ packages, onAddPackage, onEditPackage, onDeletePackage }) => {
  const [showModal, setShowModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    package_type: 'wedding',
    description: '',
    price: '',
    priceEn: '',
    image: '',
    bgColor: 'from-blue-900 to-purple-900',
    borderColor: 'border-blue-500',
    popular: false,
    features: [''],
    featuresEn: ['']
  });

  const gradientOptions = [
    { value: 'from-blue-900 to-purple-900', label: 'Blue to Purple' },
    { value: 'from-green-800 to-teal-700', label: 'Green to Teal' },
    { value: 'from-teal-800 to-green-700', label: 'Teal to Green' },
    { value: 'from-purple-800 to-pink-700', label: 'Purple to Pink' },
    { value: 'from-green-700 to-blue-800', label: 'Green to Blue' },
    { value: 'from-red-800 to-pink-700', label: 'Red to Pink' }
  ];

  const borderOptions = [
    { value: 'border-blue-500', label: 'Blue Border' },
    { value: 'border-green-500', label: 'Green Border' },
    { value: 'border-teal-500', label: 'Teal Border' },
    { value: 'border-purple-500', label: 'Purple Border' },
    { value: 'border-red-500', label: 'Red Border' },
    { value: 'border-pink-500', label: 'Pink Border' }
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({ ...formData, image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, ''],
      featuresEn: [...formData.featuresEn, '']
    });
  };

  const handleRemoveFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    const newFeaturesEn = formData.featuresEn.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      features: newFeatures,
      featuresEn: newFeaturesEn
    });
  };

  const handleFeatureChange = (index, value, isEnglish = false) => {
    const field = isEnglish ? 'featuresEn' : 'features';
    const newFeatures = [...formData[field]];
    newFeatures[index] = value;
    setFormData({
      ...formData,
      [field]: newFeatures
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPackage = {
      id: editingPackage ? editingPackage.id : Date.now(),
      ...formData,
      features: formData.features.filter(f => f.trim() !== ''),
      featuresEn: formData.featuresEn.filter(f => f.trim() !== '')
    };

    if (editingPackage) {
      onEditPackage(newPackage);
    } else {
      onAddPackage(newPackage);
    }

    setShowModal(false);
    setEditingPackage(null);
    setFormData({
      title: '',
      subtitle: '',
      package_type: 'wedding',
      description: '',
      price: '',
      priceEn: '',
      image: '',
      bgColor: 'from-blue-900 to-purple-900',
      borderColor: 'border-blue-500',
      popular: false,
      features: [''],
      featuresEn: ['']
    });
  };

  const handleEdit = (pkg) => {
    setEditingPackage(pkg);
    setFormData({
      title: pkg.title,
      subtitle: pkg.subtitle,
      package_type: pkg.package_type,
      description: pkg.description,
      price: pkg.price,
      priceEn: pkg.priceEn,
      image: pkg.image,
      bgColor: pkg.bgColor,
      borderColor: pkg.borderColor,
      popular: pkg.popular,
      features: [...pkg.features, ''],
      featuresEn: [...pkg.featuresEn, '']
    });
    setShowModal(true);
  };

  return (
    <>
      {/* Add Package Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <Plus className="w-5 h-5 inline mr-2" />
        Add New Package
      </button>

      {/* Package Cards with Edit/Delete */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-gradient-to-br ${pkg.bgColor} backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border ${pkg.borderColor} hover:scale-105 transition-all duration-300 relative group`}
          >
            {pkg.popular && (
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </span>
              </div>
            )}
            
            {/* Admin Controls */}
            <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(pkg)}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDeletePackage(pkg.id)}
                  className="bg-red-500/80 hover:bg-red-600/80 text-white p-2 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Package Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <h3 className="text-lg font-bold text-gray-800">{pkg.title}</h3>
                  <p className="text-sm text-gray-600">{pkg.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Package Content */}
            <div className="p-6">
              <p className="text-white/80 text-sm mb-4">{pkg.description}</p>
              
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-white mb-2">{pkg.price}</div>
                <div className="text-sm text-gray-300">{pkg.priceEn}</div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-white text-sm flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-medium transition-all duration-300 border border-white/30 hover:border-white/50">
                Choose Package
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Package Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingPackage ? 'Edit Package' : 'Add New Package'}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Package Title (Bengali)
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="দুলহা দুলহান"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Package Subtitle (English)
                    </label>
                    <input
                      type="text"
                      value={formData.subtitle}
                      onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Dulha Dulhan"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Package Type
                    </label>
                    <select
                      value={formData.package_type}
                      onChange={(e) => setFormData({...formData, package_type: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="graduation">Graduation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      rows="3"
                      placeholder="Package description..."
                      required
                    />
                  </div>
                </div>

                {/* Pricing and Styling */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price (Bengali)
                    </label>
                    <input
                      type="text"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="২৮,০০০৳"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price (English)
                    </label>
                    <input
                      type="text"
                      value={formData.priceEn}
                      onChange={(e) => setFormData({...formData, priceEn: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="28,000 Taka"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Background Gradient
                    </label>
                    <select
                      value={formData.bgColor}
                      onChange={(e) => setFormData({...formData, bgColor: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {gradientOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Border Color
                    </label>
                    <select
                      value={formData.borderColor}
                      onChange={(e) => setFormData({...formData, borderColor: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {borderOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="popular"
                      checked={formData.popular}
                      onChange={(e) => setFormData({...formData, popular: e.target.checked})}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="popular" className="ml-2 text-sm text-gray-700">
                      Mark as Popular
                    </label>
                  </div>
                </div>
              </div>

              {/* Image Upload */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Package Image
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer transition-colors"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image
                  </label>
                  {formData.image && (
                    <div className="w-16 h-16 rounded-lg overflow-hidden border">
                      <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Package Features</h3>
                  <button
                    type="button"
                    onClick={handleAddFeature}
                    className="flex items-center px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Feature
                  </button>
                </div>

                <div className="space-y-4">
                  {formData.features.map((feature, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Feature {index + 1} (Bengali)
                        </label>
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => handleFeatureChange(index, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="একজন চীফ ফটোগ্রাফার"
                        />
                      </div>
                      <div className="flex items-end space-x-2">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Feature {index + 1} (English)
                          </label>
                          <input
                            type="text"
                            value={formData.featuresEn[index] || ''}
                            onChange={(e) => handleFeatureChange(index, e.target.value, true)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="One Chief Photographer"
                          />
                        </div>
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveFeature(index)}
                            className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                >
                  <Save className="w-4 h-4 inline mr-2" />
                  {editingPackage ? 'Update Package' : 'Add Package'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PackageManager; 