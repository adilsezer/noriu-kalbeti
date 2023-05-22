# Noriu Kalbeti

This project is a web application developed with React for a language school platform. It provides various features to track students' progress, book lessons, manage user accounts, and more.

## Features

- User Authentication: Allows students and teachers to create accounts, log in, and manage their profile information.
- Signup Form: Enables new users to sign up by providing their email and username.
- Login Form: Allows registered users to log in with their credentials.
- Forgot Password Form: Provides a way for users to reset their passwords by entering their email.
- Account Details: Allows users to update their account information, such as display name and password.
- Dashboard: Provides a personalized dashboard for each user, displaying information such as upcoming lessons, progress tracking, billing details, and announcements.
- Lesson Booking: Allows students to book lessons based on available time slots.
- Progress Tracking: Enables students and teachers to track students' progress, including completed lessons and overall performance.
- Lesson Plans: Provides access to lesson plans and learning materials for students and teachers.
- Announcements: Displays important announcements and updates from the language school.
- Billing Details: Allows students to view and manage their billing information, such as payment history and upcoming invoices.
- FAQ: Provides answers to frequently asked questions for students and teachers.
- Leave Feedback: Allows students and teachers to leave feedback and comments on their learning experience.
- Responsive Design: The application is designed to be responsive and compatible with various devices and screen sizes.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Firebase: A cloud-based platform for building web and mobile applications.
- React Router: A routing library for React applications.
- React Toastify: A library for displaying toast notifications in React.
- CSS: Cascading Style Sheets for styling the components.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`

## Configuration

To connect the application to your Firebase project, you need to set up the Firebase configuration. Follow these steps:

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com) if you haven't already.
2. Go to the project settings and retrieve the configuration details (API keys, project ID, etc.).
3. Open the `.env` file in the project root directory.
4. Replace the placeholder values with your actual Firebase configuration details:

   REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
   REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
   REACT_APP_FIREBASE_DATABASE_URL=YOUR_FIREBASE_DATABASE_URL
   REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
   REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
   REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID

## Usage

1. Start the development server: `npm start`
2. Open the application in your browser at [http://localhost:3000](http://localhost:3000)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or suggestions, please feel free to reach out to [sezeradil@gmail.com](mailto:sezeradil@gmail.com).
