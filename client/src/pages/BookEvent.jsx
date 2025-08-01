import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Calendar, MapPin, Clock, Camera, Video, Package, Check, ArrowRight, ArrowLeft, CreditCard } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { api } from '../utils/api';

const BookEvent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(location.state?.selectedPackage || null);

  const { data: packages } = useQuery({
    queryKey: ['packages'],
    queryFn: async () => {
      const response = await api.get('/packages/');
      return response.data;
    }
  });

  const steps = [
    { id: 1, title: 'Event Details', icon: Calendar },
    { id: 2, title: 'Select Package', icon: Package },
    { id: 3, title: 'Review & Confirm', icon: Check }
  ];

  const eventTypes = [
    { value: 'wedding', label: 'Wedding', icon: '💒' },
    { value: 'birthday', label: 'Birthday Party', icon: '🎂' },
    { value: 'corporate', label: 'Corporate Event', icon: '🏢' },
    { value: 'anniversary', label: 'Anniversary', icon: '💝' },
    { value: 'graduation', label: 'Graduation', icon: '🎓' },
    { value: 'other', label: 'Other', icon: '📸' }
  ];

  const validationSchema = Yup.object({
    event_type: Yup.string().required('Event type is required'),
    event_date: Yup.date().min(new Date(), 'Event date must be in the future').required('Event date is required'),
    event_time: Yup.string().required('Event time is required'),
    event_location: Yup.string().required('Event location is required'),
    event_description: Yup.string().min(10, 'Description must be at least 10 characters').required('Event description is required'),
    package_id: Yup.string().required('Please select a package'),
    contact_name: Yup.string().required('Contact name is required'),
    contact_phone: Yup.string().required('Contact phone is required'),
    contact_email: Yup.string().email('Invalid email address').required('Contact email is required')
  });

  const initialValues = {
    event_type: '',
    event_date: '',
    event_time: '',
    event_location: '',
    event_description: '',
    package_id: selectedPackage?.id || '',
    contact_name: user?.first_name || '',
    contact_phone: user?.phone || '',
    contact_email: user?.email || ''
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await api.post('/bookings/', values);
      navigate('/dashboard', { 
        state: { message: 'Booking submitted successfully! We will contact you soon.' } 
      });
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Tell us about your event</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Event Type</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {eventTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFieldValue('event_type', type.value)}
                    className="p-4 rounded-lg border-2 border-gray-200 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="text-sm font-medium">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <Field
                  type="date"
                  name="event_date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <ErrorMessage name="event_date" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                <Field
                  type="time"
                  name="event_time"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <ErrorMessage name="event_time" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Location</label>
              <Field
                type="text"
                name="event_location"
                placeholder="Enter event location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <ErrorMessage name="event_location" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Description</label>
              <Field
                as="textarea"
                name="event_description"
                rows={4}
                placeholder="Tell us about your event..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <ErrorMessage name="event_description" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Choose your package</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages?.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-6 cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => setFieldValue('package_id', pkg.id)}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      {pkg.type === 'photography' ? (
                        <Camera className="text-primary" size={24} />
                      ) : pkg.type === 'videography' ? (
                        <Video className="text-primary" size={24} />
                      ) : (
                        <Package className="text-primary" size={24} />
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{pkg.name}</h4>
                    <p className="text-2xl font-bold text-primary mt-2">${pkg.price}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={16} className="mr-2" />
                      {pkg.duration} hours
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Camera size={16} className="mr-2" />
                      {pkg.max_photos} photos
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Video size={16} className="mr-2" />
                      {pkg.max_videos} videos
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <Field
                  type="text"
                  name="contact_name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <ErrorMessage name="contact_name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <Field
                  type="tel"
                  name="contact_phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <ErrorMessage name="contact_phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <Field
                type="email"
                name="contact_email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <ErrorMessage name="contact_email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="glass-card p-8 text-center">
          <p className="text-gray-600 mb-4">Please log in to book an event.</p>
          <button onClick={() => navigate('/login')} className="btn-primary">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gradient mb-4">Book Your Event</h1>
          <p className="text-gray-600 text-lg">Let us capture your special moments perfectly</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.id ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  <step.icon size={20} />
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-8"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ isSubmitting, isValid, setFieldValue }) => (
              <Form>
                {renderStepContent()}
                
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft size={16} />
                    Previous
                  </button>
                  
                  <div className="flex gap-3">
                    {currentStep < steps.length ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary flex items-center gap-2"
                      >
                        Next
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting || !isValid}
                        className="btn-primary flex items-center gap-2"
                      >
                        {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                        <CreditCard size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </div>
  );
};

export default BookEvent; 