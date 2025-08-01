#!/usr/bin/env python3
"""
Setup script for Event 360 project
This script helps initialize the Django backend and create initial data.
"""

import os
import sys
import subprocess
import django
from django.core.management import execute_from_command_line

def run_command(command, cwd=None):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, cwd=cwd, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def setup_django():
    """Setup Django environment"""
    # Add the server directory to Python path
    server_dir = os.path.join(os.path.dirname(__file__), 'server')
    sys.path.insert(0, server_dir)
    
    # Set Django settings
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'event360.settings')
    django.setup()

def create_superuser():
    """Create a superuser for the application"""
    from django.contrib.auth import get_user_model
    User = get_user_model()
    
    # Check if superuser already exists
    if User.objects.filter(is_superuser=True).exists():
        print("Superuser already exists!")
        return
    
    # Create superuser
    try:
        user = User.objects.create_superuser(
            username='admin',
            email='admin@event360.com',
            password='admin123',
            first_name='Admin',
            last_name='User',
            role='admin'
        )
        print(f"Superuser created successfully: {user.email}")
    except Exception as e:
        print(f"Error creating superuser: {e}")

def create_sample_data():
    """Create sample data for the application"""
    from users.models import User
    from packages.models import Package, PackageFeature
    
    # Create sample users
    users_data = [
        {
            'username': 'customer',
            'email': 'customer@event360.com',
            'password': 'password123',
            'first_name': 'John',
            'last_name': 'Doe',
            'role': 'customer'
        },
        {
            'username': 'team',
            'email': 'team@event360.com',
            'password': 'password123',
            'first_name': 'Jane',
            'last_name': 'Smith',
            'role': 'team'
        }
    ]
    
    for user_data in users_data:
        if not User.objects.filter(email=user_data['email']).exists():
            User.objects.create_user(**user_data)
            print(f"Created user: {user_data['email']}")
    
    # Create sample packages
    packages_data = [
        {
            'name': 'Basic Wedding Package',
            'package_type': 'photography',
            'difficulty_level': 'basic',
            'description': 'Perfect for intimate weddings with essential photography coverage.',
            'price': 999.00,
            'duration_hours': 6,
            'max_photos': 200,
        },
        {
            'name': 'Premium Wedding Package',
            'package_type': 'both',
            'difficulty_level': 'premium',
            'description': 'Complete wedding coverage with photography and videography.',
            'price': 2499.00,
            'duration_hours': 10,
            'max_photos': 500,
            'max_videos': 3,
        },
        {
            'name': 'Luxury Wedding Package',
            'package_type': 'both',
            'difficulty_level': 'luxury',
            'description': 'Ultimate wedding experience with full coverage and premium features.',
            'price': 4999.00,
            'duration_hours': 12,
            'max_photos': 1000,
            'max_videos': 5,
        }
    ]
    
    for package_data in packages_data:
        if not Package.objects.filter(name=package_data['name']).exists():
            package = Package.objects.create(**package_data)
            print(f"Created package: {package.name}")
            
            # Add features based on package type
            if package.package_type == 'photography':
                features = [
                    'Professional Photography Coverage',
                    'High-Resolution Digital Images',
                    'Online Gallery',
                    'Basic Photo Editing'
                ]
            elif package.package_type == 'both':
                features = [
                    'Professional Photography & Videography',
                    'High-Resolution Digital Images',
                    'Cinematic Wedding Film',
                    'Online Gallery',
                    'Premium Photo & Video Editing',
                    'Drone Coverage',
                    'Engagement Session'
                ]
            
            for feature in features:
                PackageFeature.objects.create(
                    package=package,
                    title=feature,
                    is_included=True
                )

def main():
    """Main setup function"""
    print("🚀 Setting up Event 360 project...")
    
    # Check if we're in the right directory
    if not os.path.exists('server') or not os.path.exists('client'):
        print("❌ Please run this script from the project root directory!")
        return
    
    # Setup Django
    print("📦 Setting up Django environment...")
    setup_django()
    
    # Run Django migrations
    print("🔄 Running Django migrations...")
    success, stdout, stderr = run_command('python manage.py migrate', cwd='server')
    if success:
        print("✅ Migrations completed successfully!")
    else:
        print(f"❌ Migration failed: {stderr}")
        return
    
    # Create superuser
    print("👤 Creating superuser...")
    create_superuser()
    
    # Create sample data
    print("📊 Creating sample data...")
    create_sample_data()
    
    print("\n🎉 Setup completed successfully!")
    print("\n📋 Next steps:")
    print("1. Start the Django server: cd server && python manage.py runserver")
    print("2. Start the React client: cd client && npm install && npm run dev")
    print("3. Access the application at http://localhost:3000")
    print("\n🔑 Default credentials:")
    print("- Admin: admin@event360.com / admin123")
    print("- Customer: customer@event360.com / password123")
    print("- Team: team@event360.com / password123")

if __name__ == '__main__':
    main() 