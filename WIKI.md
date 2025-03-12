# Project Summary

The Sports Betting Platform is a modern and responsive web application designed to provide users with an engaging and interactive betting experience. Inspired by leading platforms like 1xBet, this website enables users to register, deposit funds, place bets on various sports, and manage their betting activities effectively. The platform aims to maximize user engagement through real-time betting features, competitive odds, and a user-friendly interface. With a focus on security and scalability, it offers multiple payment methods and supports both live and pre-match betting options.

# Project Module Description

## Functional Modules

1. **User Authentication**  
   Allows users to register and log in using their email, phone, or social media accounts. It includes two-factor authentication for enhanced security.

2. **Live Betting**  
   Users can place bets on ongoing matches in real-time, with constant updates on odds and match status.

3. **Odds Display**  
   A dynamic display of betting odds for various sports markets, updated in real-time via WebSocket integration.

4. **Bet Slip Management**  
   Users can create and manage their bet slips, view potential winnings, and place multiple bets easily.

5. **Payment Integration**  
   Supports various payment methods, allowing users to deposit and withdraw their earnings securely.

6. **Admin Dashboard**  
   An interface for administrators to manage users, odds, and payouts effectively.

# Directory Tree

```
/data/chats/irko3d/workspace
+-- docs
|   +-- sports_betting_prd.md
+-- react_template
|   +-- README.md
|   +-- eslint.config.js
|   +-- index.html
|   +-- package.json
|   +-- postcss.config.js
|   +-- public
|   |   +-- assets
|   |   |   +-- images
|   |   +-- data
|   |       +-- example.json
|   +-- src
|   |   +-- App.jsx
|   |   +-- components
|   |   |   +-- Layout.jsx
|   |   |   +-- auth
|   |   |   |   +-- Login.jsx
|   |   |   |   +-- Register.jsx
|   |   |   +-- betting
|   |   |       +-- BetSlip.jsx
|   |   |       +-- BettingDashboard.jsx
|   |   |       +-- LiveMatches.jsx
|   |   |       +-- OddsDisplay.jsx
|   |   +-- contexts
|   |   |   +-- AuthContext.jsx
|   |   |   +-- BettingContext.jsx
|   |   +-- index.css
|   |   +-- main.jsx
|   |   +-- pages
|   |   |   +-- HomePage.jsx
|   |   +-- utils
|   |       +-- constants.js
|   |       +-- mockData.js
|   |       +-- websocket.js
|   +-- tailwind.config.js
|   +-- template_config.json
|   +-- vite.config.js
+-- sports_betting_class_diagram.mermaid
+-- sports_betting_sequence_diagram.mermaid
+-- sports_betting_system_design.md
```

# File Description Inventory

- **sports_betting_prd.md**: Contains the Product Requirements Document detailing market analysis, competitor analysis, user personas, and technical requirements for the betting platform.
- **sports_betting_system_design.md**: Main system architecture document covering technology stack, components, scalability, and security specifications.
- **sports_betting_class_diagram.mermaid**: Represents the database schema and class relationships of the system using Mermaid format.
- **sports_betting_sequence_diagram.mermaid**: Illustrates key system interactions for betting flows.
- **README.md**: Instructions and guidelines for setting up and developing the project.
- **src/**: Contains all the source code for the React application including components, contexts, pages, utilities, and the main application entry point.

# Technology Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Cache**: Redis
- **Real-time Communication**: Socket.io
- **Authentication**: Auth0
- **Deployment**: Vite

# Usage

## Installation Instructions

1. Navigate to your project directory.
2. Install dependencies by running:
   ```
   pnpm install
   ```

## Running the Development Server

1. Start the development server using:
   ```
   pnpm run dev
   ```

## Building the Application

To build the application for production, use:
```
pnpm run build
```

Make sure to set up your environment variables for Auth0 and any API endpoints necessary for the application to function correctly.



# INSTRUCTION
- Project Path:`/data/chats/irko3d/workspace/react_template`
- You can search for the file path in the 'Directory Tree';
- After modifying the project files, if this project can be previewed, then you need to reinstall dependencies, restart service and preview;
