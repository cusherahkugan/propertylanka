# PropertyLanka - Real Estate Rental Platform

A modern property rental platform built with Next.js for connecting property owners with potential renters in Sri Lanka.

## About This Project

This project was started based on the **Coursera Next.js Specialization Course** and enhanced with additional features to create a complete property rental solution.

## Features

### Core Features (From Course)
- Property listing and browsing
- User authentication with Google
- Property search and filtering
- Property details view
- User profiles
- Property management
- Image upload and display
- Responsive design

### Additional Features
- Property bookmarking system
- Messaging between renters and owners
- Unread message notifications
- Featured properties section
- Social media sharing
- Interactive image gallery
- Advanced search with results page
- Mobile-friendly navigation

## Technology Stack

### Frontend
- Next.js 14 (React framework)
- React 18
- Tailwind CSS 4
- React Icons
- PhotoSwipe (image gallery)

### Backend
- Next.js API Routes
- MongoDB (database)
- Mongoose (ODM)

### Authentication
- NextAuth.js
- Google OAuth

### File Storage
- Cloud-based image management

### Development Tools
- ESLint
- PostCSS

## Getting Started

### Prerequisites
- Node.js version 18 or higher
- MongoDB database
- Google OAuth credentials
- Cloud storage account for images

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd propertylanka
```

2. Install dependencies
```bash
npm install
```

3. Create environment file

Create a `.env` file in the root directory:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Google Authentication
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Image Storage
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# API Domain
NEXT_PUBLIC_API_DOMAIN=http://localhost:3000
NEXT_PUBLIC_DOMAIN=http://localhost:3000
```

4. Run the development server
```bash
npm run dev
```

5. Open your browser at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
propertylanka/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── messages/          # Messages page
│   ├── profile/           # User profile
│   ├── properties/        # Property pages
│   └── page.jsx          # Home page
├── components/            # React components
├── config/               # Configuration
├── models/               # Database models
├── public/               # Static files
├── utils/                # Utilities
└── package.json          # Dependencies
```

## Key Features Explained

### For Renters
- Browse and search properties
- View detailed property information
- Bookmark favorite properties
- Contact property owners
- Save search preferences

### For Property Owners
- List properties with multiple images
- Manage property details
- Receive and manage inquiries
- Mark properties as featured
- Track message notifications

## System Overview

PropertyLanka is a full-stack web application that simplifies property rentals in Sri Lanka. The platform provides an easy-to-use interface for property seekers to find their ideal rental and for property owners to list and manage their properties.

The system uses modern web technologies to ensure fast performance, secure authentication, and smooth user experience across all devices.

## Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Coursera Next.js Specialization Course for the foundation
- The Next.js team for the framework
- All open-source contributors