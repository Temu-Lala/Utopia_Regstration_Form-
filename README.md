# Utopia Registration Form - Empowering Talent Discovery

Unlocking Potential, Together.

# Overview

This application bridges the gap between Utopia, a company driven by innovation and impact, and individuals eager to contribute their skills and expertise. It offers:

A seamless registration process for individuals to showcase their talents.
A secure and efficient admin dashboard for Utopia's team to discover and engage with exceptional talent.
# Key Features:

.User-Friendly Registration Form:
##Intuitive interface for capturing essential information.
##Secure data handling and storage.
##Admin Dashboard for Efficient Talent Management:
##Protected by secure login.
##Comprehensive overview of registered users.
##CRUD operations for managing user data efficiently.
##Streamlined selection process based on skills and contributions.
# Technology Stack:

##Frontend: Next.js, TypeScript, Tailwind CSS, Custom Fonts
##Backend: Django, Django REST Framework
##Database: PostgreSQL
# Getting Started:

Clone the Repository:
Bash
git clonehttps://github.com/Temu-Lala/Utopia_Regstration_Form-.git
Use code with caution. Learn more
Set Up the Environment:
Create a virtual environment and activate it.
Install dependencies: pip install -r requirements.txt
Configure PostgreSQL database settings in backend/settings.py.
Bash
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'lala',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
Apply database migrations: python manage.py migrate

## install dependences for frontend using 
Bash
npm i
# Running the Project:

Start the Backend Server:
Bash
python manage.py runserver
Use code with caution. Learn more
Start the Frontend Development Server:
Bash
npm run dev
Use code with caution. Learn more
# Usage:

Registration:

Access the form at http://localhost:3000/
Fill out and submit.
Admin Dashboard:

Navigate to the login page (usually http://localhost:8000/admin/)
Use admin credentials to log in.
Manage user data, filter profiles, perform CRUD operations.
# Contributing:

We welcome contributions! Follow the standard forking and pull request process.
