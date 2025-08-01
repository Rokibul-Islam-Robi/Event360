# Event 360 - Professional Photography & Videography Platform

A modern, responsive web application for professional photography and videography services. Built with React, Django, and modern web technologies.

## 🚀 Features

### Frontend (React)
- **Modern UI/UX**: Dark theme with gradient backgrounds and smooth animations
- **Responsive Design**: Works perfectly on all devices
- **Interactive Components**: 
  - Filter buttons for events (All, Photography, Videography)
  - Color-coded event categories (Blue for Photography, Green for Videography)
  - Smooth animations with Framer Motion
- **Complete Sections**:
  - Hero section with call-to-action
  - Services showcase
  - Recent events with filtering
  - Package pricing tiers
  - Why choose us benefits
  - FAQ section

### Backend (Django)
- **RESTful API**: Complete backend with Django REST Framework
- **Authentication System**: User registration, login, and profile management
- **Database Models**: Events, Packages, Bookings, Users
- **File Management**: Media upload and management
- **Admin Panel**: Full Django admin interface

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications

### Backend
- **Django 4.2** - Python web framework
- **Django REST Framework** - API development
- **SQLite** - Database (can be changed to PostgreSQL/MySQL)
- **Pillow** - Image processing
- **Django CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Event360/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Utility functions
│   │   └── App.jsx        # Main app component
│   ├── public/            # Static files
│   └── package.json       # Frontend dependencies
├── server/                # Django backend
│   ├── event360/          # Django project settings
│   ├── bookings/          # Booking app
│   ├── events/            # Events app
│   ├── packages/          # Packages app
│   ├── users/             # User management
│   └── requirements.txt   # Backend dependencies
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- Git

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

### Backend Setup
```bash
cd server
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## 🌟 Key Features

### 📅 Recent Events Section
- **Filter Buttons**: All, Photography, Videography
- **Event Grid**: 6 recent events with images and category tags
- **Color-Coded Categories**: Blue for photography, green for videography
- **Responsive Design**: Works on all devices

### 🎁 Packages Section
- **4 Package Tiers**: Basic, Standard, Premium, Ultimate
- **Pricing**: Clear pricing structure from $999 to $3,999
- **Features**: Detailed feature lists with checkmarks
- **Popular Badge**: Highlights the most popular package
- **Special Discount**: Promotional section with discount code

### ✅ Why Choose Event 360 Section
- **4 Benefit Cards**: Professional Team, Secure Bookings, Direct Communication, Quality Guarantee
- **Green Check Icons**: Consistent with design requirements
- **Trust-Building Content**: Professional messaging

### ❓ FAQ Section
- **4 FAQ Items**: Common questions about packages, booking, services, and policies
- **Blue Question Icons**: Matches design requirements
- **Clean Layout**: Easy-to-read format

## 🎨 Design Features

- **Dark Theme**: Professional dark gradient backgrounds
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive Design**: Mobile-first approach
- **Professional Content**: Realistic data and messaging
- **Interactive Elements**: Hover effects and transitions

## 📱 Responsive Design

The application is fully responsive and works perfectly on:
- 📱 Mobile devices
- 📱 Tablets
- 💻 Desktop computers
- 🖥️ Large screens

## 🔧 Development

### Frontend Development
```bash
cd client
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend Development
```bash
cd server
python manage.py runserver    # Start Django server
python manage.py makemigrations  # Create migrations
python manage.py migrate      # Apply migrations
python manage.py createsuperuser  # Create admin user
```

## 📦 Deployment

### Frontend Deployment
The React app can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Backend Deployment
The Django backend can be deployed to:
- Heroku
- DigitalOcean
- AWS
- Any Python hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rokibul Islam Robi**
- GitHub: [@Rokibul-Islam-Robi](https://github.com/Rokibul-Islam-Robi)
- Repository: [Event360](https://github.com/Rokibul-Islam-Robi/Event360.git)

## 🙏 Acknowledgments

- React team for the amazing framework
- Django team for the robust backend framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

**Event 360** - Making your special moments last forever! 📸✨ 