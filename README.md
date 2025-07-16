# EcoTrack

Frontend (React):

    TailwindCSS or Material UI for clean, modern design

    React Router for multi-page navigation

    Chart.js or Recharts for analytics

Backend (Spring Boot):

    REST API for user data, activity logging, and suggestions

    Spring Security (optional) for login/auth

    MySQL/PostgreSQL or H2 (for dev) for data persistence

Extras:

    JWT for authentication

    OpenWeather API or Google Maps API to suggest eco-choices based on location/weather

    Gamification: badges, streaks, leaderboards (good way to practice logic)

🧩 Key Features:
- User Authentication (sign up, login, secure session)

- Daily Eco Log: Let users enter actions like:

    "Used public transport" ✔️

    "Reduced plastic use" ✔️

    "Planted a tree" 

-  Analytics Dashboard:

    Weekly/monthly impact stats

    Visualized in graphs (CO2 saved, water saved, etc.)

- Smart Suggestions:

Backend uses simple rules (or ML later) to recommend personalized eco-tips

Rewards System:

- Points per action

- Achievements for reaching milestones (e.g., "100kg CO2 saved")