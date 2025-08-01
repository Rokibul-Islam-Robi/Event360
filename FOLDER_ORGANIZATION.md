# Event 360 - Folder Organization

## Overview
The Event 360 project is organized into separate frontend and backend folders for clear separation of concerns and independent development.

## Project Structure

```
Event360/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── contexts/       # React contexts
│   │   │   └── AuthContext.jsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Packages.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Contact.jsx
│   │   ├── utils/          # Utility functions
│   │   │   └── api.js
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
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   ├── users/             # User management app
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── events/            # Event management app
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── packages/          # Package management app
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── rentals/           # Equipment rental app
│   │   ├── models.py
│   │   └── urls.py
│   ├── media/             # Media upload app
│   │   └── urls.py
│   ├── bookings/          # Booking management app
│   │   └── urls.py
│   ├── offers/            # Offers/promotions app
│   │   └── urls.py
│   ├── manage.py          # Django management script
│   └── requirements.txt   # Python dependencies
│
├── README.md              # Main project documentation
├── QUICK_START.md         # Quick setup guide
├── setup.py               # Automated setup script
├── PROJECT_STRUCTURE.md   # Detailed structure documentation
└── FOLDER_ORGANIZATION.md # This file
```

## Benefits of This Organization

### ✅ Clear Separation
- **Frontend** (`client/`) and **Backend** (`server/`) are completely separate
- Each folder can be developed, tested, and deployed independently
- Clear boundaries between frontend and backend concerns

### ✅ Independent Development
- Frontend team can work in `client/` folder
- Backend team can work in `server/` folder
- No conflicts between frontend and backend development
- Different technologies and dependencies are isolated

### ✅ Easy Deployment
- Frontend can be deployed to Vercel, Netlify, etc.
- Backend can be deployed to AWS, DigitalOcean, etc.
- Each part can be scaled independently
- Different deployment strategies for each part

### ✅ Scalable Structure
- Easy to add new frontend pages in `client/src/pages/`
- Easy to add new backend apps in `server/`
- Clear organization makes it easy for new developers to understand
- Modular structure supports team growth

### ✅ Version Control
- Clear git history for frontend and backend changes
- Easy to track which changes affect which part
- Separate deployment pipelines possible
- Better code review process

## Development Workflow

### Frontend Development
```bash
cd client
npm install
npm run dev
# Frontend runs on http://localhost:3000
```

### Backend Development
```bash
cd server
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py runserver
# Backend runs on http://localhost:8000
```

### Full Stack Development
- Run both servers simultaneously
- Frontend makes API calls to backend
- CORS is configured for cross-origin requests
- JWT tokens handle authentication between frontend and backend

## File Naming Conventions

### Frontend (client/)
- **Components**: PascalCase (e.g., `Navbar.jsx`)
- **Pages**: PascalCase (e.g., `Home.jsx`)
- **Utils**: camelCase (e.g., `api.js`)
- **Contexts**: PascalCase (e.g., `AuthContext.jsx`)

### Backend (server/)
- **Apps**: lowercase (e.g., `users/`, `events/`)
- **Models**: PascalCase (e.g., `User`, `Event`)
- **Views**: PascalCase (e.g., `UserView`, `EventView`)
- **URLs**: lowercase with hyphens (e.g., `user-list`, `event-detail`)

## Next Steps

1. **Complete Backend APIs**: Finish serializers and views for remaining apps
2. **Frontend Integration**: Connect frontend to backend APIs
3. **Additional Pages**: Create remaining frontend pages
4. **Testing**: Add unit and integration tests
5. **Deployment**: Set up production deployment
6. **Documentation**: Complete API documentation

This organized structure provides a solid foundation for a professional, scalable wedding photography management system. 