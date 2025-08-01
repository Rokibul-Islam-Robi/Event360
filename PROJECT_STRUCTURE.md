# Event 360 - Project Structure

## Overview
This is a full-stack wedding photography management website built with React (frontend) and Django REST Framework (backend).

## Project Organization
```
Event360/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts (Auth, etc.)
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── index.html          # HTML template
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── postcss.config.js   # PostCSS configuration
│
├── server/                 # Backend (Django + DRF)
│   ├── event360/          # Django project settings
│   ├── users/             # User management app
│   ├── events/            # Event management app
│   ├── packages/          # Package management app
│   ├── rentals/           # Equipment rental app
│   ├── media/             # Media upload app
│   ├── bookings/          # Booking management app
│   ├── offers/            # Offers/promotions app
│   ├── manage.py          # Django management script
│   └── requirements.txt   # Python dependencies
│
├── README.md              # Main project documentation
├── QUICK_START.md         # Quick setup guide
├── setup.py               # Automated setup script
└── PROJECT_STRUCTURE.md   # This file
```

## Frontend Structure (client/)

### Core Files
- **`src/App.jsx`**: Main application component with routing
- **`src/main.jsx`**: React entry point with providers
- **`src/index.css`**: Global styles and Tailwind directives

### Components (`src/components/`)
- **`Navbar.jsx`**: Navigation component with glassmorphism
- **`Footer.jsx`**: Footer component
- **`ProtectedRoute.jsx`**: Route protection component

### Pages (`src/pages/`)
- **`Home.jsx`**: Landing page with hero section
- **`Login.jsx`**: User authentication page
- **`Register.jsx`**: User registration page
- **`Gallery.jsx`**: Event gallery with filtering
- **`Packages.jsx`**: Photography/videography packages
- **`Dashboard.jsx`**: Role-based dashboard
- **`Contact.jsx`**: Contact form and information

### Contexts (`src/contexts/`)
- **`AuthContext.jsx`**: Authentication state management

### Utils (`src/utils/`)
- **`api.js`**: Axios configuration and interceptors

### Configuration Files
- **`package.json`**: Frontend dependencies and scripts
- **`vite.config.js`**: Vite build configuration
- **`tailwind.config.js`**: Tailwind CSS customization
- **`postcss.config.js`**: PostCSS plugins

## Backend Structure (server/)

### Django Project (`event360/`)
- **`settings.py`**: Django project configuration
- **`urls.py`**: Main URL routing
- **`wsgi.py`**: WSGI configuration
- **`asgi.py`**: ASGI configuration

### Django Apps

#### Users App (`users/`)
- **`models.py`**: User and OTP models
- **`serializers.py`**: User-related serializers
- **`views.py`**: Authentication views
- **`urls.py`**: User app URLs

#### Events App (`events/`)
- **`models.py`**: Event, EventMedia, EventSchedule, TeamAssignment models
- **`serializers.py`**: Event-related serializers
- **`views.py`**: Event management views
- **`urls.py`**: Event app URLs

#### Packages App (`packages/`)
- **`models.py`**: Package, PackageFeature, PackageGallery, PackageReview models
- **`serializers.py`**: Package-related serializers
- **`views.py`**: Package management views
- **`urls.py`**: Package app URLs

#### Rentals App (`rentals/`)
- **`models.py`**: Equipment and RentalOrder models
- **`urls.py`**: Rental app URLs

#### Media App (`media/`)
- **`urls.py`**: Media upload URLs

#### Bookings App (`bookings/`)
- **`urls.py`**: Booking management URLs

#### Offers App (`offers/`)
- **`urls.py`**: Offers/promotions URLs

### Configuration Files
- **`manage.py`**: Django management script
- **`requirements.txt`**: Python dependencies

## Key Features by Folder

### Frontend Features (client/)
✅ **Modern UI/UX**: Glassmorphism effects, Framer Motion animations
✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
✅ **Form Handling**: Formik + Yup validation
✅ **Authentication**: JWT token management
✅ **Role-Based Access**: Different dashboards for customers, team, admins
✅ **Professional Styling**: Corporate look with custom components

### Backend Features (server/)
✅ **RESTful APIs**: Django REST Framework
✅ **Authentication**: JWT with email OTP verification
✅ **Role-Based Access**: Customer, Team, Admin roles
✅ **File Upload**: Media handling with Pillow
✅ **Database Models**: Comprehensive data models
✅ **API Endpoints**: Structured API routing

## Technology Stack

### Frontend
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Formik + Yup**: Form handling and validation
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **Lucide React**: Icon library

### Backend
- **Django 4.2**: Web framework
- **Django REST Framework**: API framework
- **JWT Authentication**: Token-based auth
- **PostgreSQL/SQLite**: Database
- **Pillow**: Image processing
- **Celery**: Background tasks
- **Redis**: Caching and message broker

## Development Workflow

1. **Frontend Development**: Work in `client/` folder
   - Run: `cd client && npm run dev`
   - Build: `cd client && npm run build`

2. **Backend Development**: Work in `server/` folder
   - Run: `cd server && python manage.py runserver`
   - Migrations: `cd server && python manage.py makemigrations && python manage.py migrate`

3. **Full Stack**: Both servers run simultaneously
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:8000`

## File Organization Benefits

✅ **Clear Separation**: Frontend and backend are completely separate
✅ **Independent Development**: Teams can work on frontend/backend independently
✅ **Easy Deployment**: Each folder can be deployed separately
✅ **Scalable Structure**: Easy to add new features and components
✅ **Maintainable Code**: Well-organized file structure
✅ **Version Control**: Clear git history for each part

## Next Steps

1. **Complete Backend APIs**: Finish serializers and views for remaining apps
2. **Frontend Integration**: Connect frontend to backend APIs
3. **Additional Pages**: Create remaining frontend pages (BookEvent, Profile, etc.)
4. **Testing**: Add unit and integration tests
5. **Deployment**: Set up production deployment
6. **Documentation**: Complete API documentation

This structure provides a solid foundation for a professional, scalable wedding photography management system. 