import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Upload, Save, X, Play, Pause, Image as ImageIcon, Video, Settings } from 'lucide-react';

const HeroBackgroundManager = ({ onBackgroundChange, isModalOpen = false, onCloseModal }) => {
  const [showModal, setShowModal] = useState(false);
  const [editingMedia, setEditingMedia] = useState(null);
  const [mediaList, setMediaList] = useState([]);
  const [currentBackground, setCurrentBackground] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    mediaType: 'image',
    file: null,
    duration: 5,
    transition: 'fade',
    active: false
  });

  // Load media from localStorage
  useEffect(() => {
    const savedMedia = localStorage.getItem('event360_hero_media');
    const savedBackground = localStorage.getItem('event360_current_background');
    
    if (savedMedia) {
      setMediaList(JSON.parse(savedMedia));
    }
    
    if (savedBackground) {
      setCurrentBackground(JSON.parse(savedBackground));
      onBackgroundChange(JSON.parse(savedBackground));
    }
  }, [onBackgroundChange]);

  // Save media to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('event360_hero_media', JSON.stringify(mediaList));
  }, [mediaList]);

  useEffect(() => {
    if (currentBackground) {
      localStorage.setItem('event360_current_background', JSON.stringify(currentBackground));
      onBackgroundChange(currentBackground);
    }
  }, [currentBackground, onBackgroundChange]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({ ...formData, file: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedia = {
      id: editingMedia ? editingMedia.id : Date.now(),
      ...formData,
      createdAt: new Date().toISOString()
    };

    if (editingMedia) {
      setMediaList(mediaList.map(media => media.id === editingMedia.id ? newMedia : media));
    } else {
      setMediaList([...mediaList, newMedia]);
    }

    setShowModal(false);
    if (onCloseModal) onCloseModal();
    setEditingMedia(null);
    setFormData({
      title: '',
      description: '',
      mediaType: 'image',
      file: null,
      duration: 5,
      transition: 'fade',
      active: false
    });
  };

  const handleEdit = (media) => {
    setEditingMedia(media);
    setFormData({
      title: media.title,
      description: media.description,
      mediaType: media.mediaType,
      file: media.file,
      duration: media.duration,
      transition: media.transition,
      active: media.active
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this media?')) {
      setMediaList(mediaList.filter(media => media.id !== id));
      if (currentBackground && currentBackground.id === id) {
        setCurrentBackground(null);
      }
    }
  };

  const handleSetActive = (media) => {
    setCurrentBackground(media);
  };

  const transitionOptions = [
    { value: 'fade', label: 'Fade' },
    { value: 'slide', label: 'Slide' },
    { value: 'zoom', label: 'Zoom' },
    { value: 'none', label: 'None' }
  ];

  return (
    <>



      {/* Add/Edit Media Modal */}
      {(showModal || isModalOpen) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingMedia ? 'Edit Background Media' : 'Add Background Media'}
                </h2>
                <button
                  onClick={() => {
                    setShowModal(false);
                    if (onCloseModal) onCloseModal();
                  }}
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
                      Media Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Wedding Collection 2024"
                      required
                    />
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
                      placeholder="Description of this background media..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Media Type
                    </label>
                    <select
                      value={formData.mediaType}
                      onChange={(e) => setFormData({...formData, mediaType: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="image">Image</option>
                      <option value="video">Video</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transition Effect
                    </label>
                    <select
                      value={formData.transition}
                      onChange={(e) => setFormData({...formData, transition: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {transitionOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  {formData.mediaType === 'video' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration (seconds)
                      </label>
                      <input
                        type="number"
                        value={formData.duration}
                        onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        min="1"
                        max="30"
                        required
                      />
                    </div>
                  )}
                </div>

                {/* File Upload */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload {formData.mediaType === 'image' ? 'Image' : 'Video'}
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="file"
                        accept={formData.mediaType === 'image' ? 'image/*' : 'video/*'}
                        onChange={handleFileUpload}
                        className="hidden"
                        id="media-upload"
                        required
                      />
                      <label
                        htmlFor="media-upload"
                        className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer transition-colors"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload {formData.mediaType === 'image' ? 'Image' : 'Video'}
                      </label>
                      {formData.file && (
                        <div className="w-20 h-20 rounded-lg overflow-hidden border">
                          {formData.mediaType === 'image' ? (
                            <img src={formData.file} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <video src={formData.file} className="w-full h-full object-cover" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="active"
                      checked={formData.active}
                      onChange={(e) => setFormData({...formData, active: e.target.checked})}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="active" className="ml-2 text-sm text-gray-700">
                      Set as active background
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    if (onCloseModal) onCloseModal();
                  }}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                >
                  <Save className="w-4 h-4 inline mr-2" />
                  {editingMedia ? 'Update Media' : 'Add Media'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBackgroundManager; 