# Event 360 - Quick Start Guide

This guide will help you set up and run the Event 360 wedding photography and videography management website.

## 🚀 Prerequisites

Before you begin, make sure you have the following installed:

- **Python 3.8+**
- **Node.js 16+**
- **npm** or **yarn**
- **Git**

## 📦 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Event360
```

### 2. Backend Setup (Django)

```bash
# Navigate to server directory
cd server

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the setup script to initialize the project
python ../setup.py

# Start the Django server
python manage.py runserver
```

The Django server will be running at `http://localhost:8000`

### 3. Frontend Setup (React)

```bash
# Open a new terminal and navigate to client directory
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

The React app will be running at `http://localhost:3000`

## 🔑 Default Credentials

After running the setup script, you can use these default accounts:

### Admin Account
- **Email:** admin@event360.com
- **Password:** admin123
- **Role:** Admin (Full access to all features)

### Customer Account
- **Email:** customer@event360.com
- **Password:** password123
- **Role:** Customer (Can book events, view packages)

### Team Account
- **Email:** team@event360.com
- **Password:** password123
- **Role:** Team Member (Can manage events, upload media)

## 🎯 Features Available

### For Customers
- ✅ User registration and login with email OTP verification
- ✅ Browse photography and videography packages
- ✅ View event gallery and completed events
- ✅ Book events and manage bookings
- ✅ Equipment rental system
- ✅ User dashboard with booking history

### For Admin/Team
- ✅ Event management and scheduling
- ✅ Media upload for events
- ✅ Package management
- ✅ Team assignment to events
- ✅ Social media integration
- ✅ Analytics and reporting

### Technical Features
- ✅ JWT Authentication
- ✅ Email OTP verification
- ✅ Role-based access control
- ✅ Glassmorphism UI design
- ✅ Responsive design
- ✅ Framer Motion animations
- ✅ Formik + Yup validation

## 🛠 Development

### Backend API Endpoints

The Django REST API provides the following main endpoints:

- **Authentication:** `/api/auth/`
- **Events:** `/api/events/`
- **Packages:** `/api/packages/`
- **Rentals:** `/api/rentals/`
- **Media:** `/api/media/`
- **Bookings:** `/api/bookings/`
- **Offers:** `/api/offers/`

### Frontend Structure

```
client/src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── contexts/      # React contexts (Auth, etc.)
├── utils/         # Utility functions and API calls
└── assets/        # Images and static files
```

## 🔧 Configuration

### Email Settings (for OTP)

To enable email OTP verification, update the email settings in `server/event360/settings.py`:

```python
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@gmail.com'
EMAIL_HOST_PASSWORD = 'your-app-password'
```

### Database

The project uses SQLite by default. For production, consider using PostgreSQL:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'event360_db',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

## 🚀 Deployment

### Backend Deployment
1. Set up a production server (AWS, DigitalOcean, etc.)
2. Install PostgreSQL and configure the database
3. Set up environment variables for production
4. Configure email settings for OTP
5. Deploy using Gunicorn or uWSGI

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy to Vercel, Netlify, or your preferred hosting service
3. Configure environment variables for API endpoints

## 🐛 Troubleshooting

### Common Issues

1. **Django server won't start**
   - Make sure virtual environment is activated
   - Check if all dependencies are installed
   - Run `python manage.py migrate`

2. **React app won't start**
   - Make sure Node.js version is 16+
   - Delete `node_modules` and run `npm install` again
   - Check if port 3000 is available

3. **Email OTP not working**
   - Verify email settings in Django settings
   - Check if email credentials are correct
   - For Gmail, use App Password instead of regular password

4. **API calls failing**
   - Ensure Django server is running on port 8000
   - Check CORS settings in Django
   - Verify API endpoints are correct

### Getting Help

If you encounter any issues:

1. Check the console for error messages
2. Verify all prerequisites are installed
3. Ensure all dependencies are properly installed
4. Check the Django and React logs for specific errors

## 📚 Additional Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [React Documentation](https://reactjs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Event 360** - Making your special moments last forever ✨ 