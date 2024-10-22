# Apex-Legends-RP-Tracker
Overview:
The Apex Legends RP Tracker is a web-based application designed to help players track their Ranked Points (RP) progress in Apex Legends. The application provides a user-friendly interface to monitor RP gains and losses, visualize progress over time, and analyze performance in ranked matches.

Features:
    Real-Time RP Tracking: Automatically fetches and displays your current RP from the Apex Legends API.
    Match History: View your match history, including kills, assists, deaths, and RP changes.
    Performance Metrics: Analyze your performance with detailed statistics, such as average kills per match and win rates.
    Progress Visualization: Interactive graphs and charts to visualize your RP progression over time.
    Alerts and Notifications: Set alerts for RP milestones or when you drop below a certain RP threshold.
    User Authentication: Secure user authentication to protect your data.
Technologies Used:
    Frontend: React.js, Redux, Chart.js
    Backend: Node.js, Express.js
    Database: MongoDB
    API: Apex Legends API for fetching player data
    Authentication: JSON Web Tokens (JWT)
Installation

Prerequisites:
    Node.js (v14 or later)
    MongoDB (local or Atlas)
    Git
Clone the Repository:

bash

git clone https://github.com/yourusername/apex-legends-rp-tracker.git
cd apex-legends-rp-tracker

Setup Environment Variables

Create a .env file in the root directory and add the following variables:

makefile

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
APEX_API_KEY=your_apex_api_key

Install Dependencies:

bash

npm install

Start the Development Server:

bash

npm run dev

The application should now be running on http://localhost:3000.

Usage:

Register/Login: Create an account or log in to your existing account.
Link Your Account: Connect your Apex Legends account using your in-game username and platform (Origin, Steam, etc.).
Track Your RP: Access your dashboard to view your RP history, match statistics, and progress visualizations.

API Documentation:

The application uses the Apex Legends API to fetch player data. Here are the main endpoints:

GET /api/player/{username}/{platform}: Fetch player data, including current RP and match history.
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in an existing user.
GET /api/stats/{userId}: Fetch performance metrics for the logged-in user.

Testing:
To run tests, ensure you have all dependencies installed and execute:

bash

npm test

Contributing:
We welcome contributions! 

To contribute:
Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes and commit them (git commit -m 'Add your feature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.

License:
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments:
Apex Legends API
React
Node.js
MongoDB

Contact:
For questions, suggestions, or issues, feel free to reach out via GitHub Issues or contact me at theodoresmith2028@gmail.com.

Thank you for using the Apex Legends RP Tracker! Happy gaming!

