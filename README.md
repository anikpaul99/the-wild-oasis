# The Wild Oasis

**The Wild Oasis** is a custom-built internal application designed for a small boutique hotel featuring eight luxurious wooden cabins. This application is specifically crafted to allow hotel employees to manage all aspects of hotel operations, including bookings, cabin management, and guest check-ins. The application serves as a back-office tool, ensuring efficient and seamless management of hotel activities.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contact](#contact)

## Project Overview

**The Wild Oasis** application is an internal tool designed exclusively for hotel employees. The application allows employees to:

- Manage bookings, including checking in and out guests.
- Handle cabin information, such as updating cabin details and availability.
- View and update guest information.
- Perform various administrative tasks, including managing hotel settings and user accounts.

The application is integrated with a Supabase database, where all data is stored and managed through a custom-built API. The goal is to provide an efficient system that simplifies the hotel's daily operations while offering a user-friendly interface.

### Core Functionalities

- **User Authentication**: Only registered hotel employees can log into the application. New user sign-up is restricted to internal operations to ensure that only hotel staff can access the system.
- **Cabin Management**: A table view displays all cabins, including details like photos, name, capacity, price, and current discounts. Employees can create, update, or delete cabin records.
- **Booking Management**: The application provides a comprehensive booking management system where employees can view booking details, filter bookings by status, and check guests in or out.
- **Guest Management**: Employee can manage guest data, including personal details and booking history.
- **Dashboard**: The initial screen features a dashboard with key metrics and statistics, such as recent bookings, sales, and occupancy rates, to give employees a quick overview of hotel operations.
- **Application Settings**: Employees can configure global settings like breakfast pricing, minimum and maximum stay durations, and guest capacity.

## Features

### Dashboard

- Overview of recent bookings, sales, and occupancy rates.
- Quick access to tasks such as checking in or checking out guests.
- Charts displaying daily sales and stay duration statistics.

### Bookings

- View all bookings with details on arrival and departure dates, status, and payment information.
- Filter bookings by status (unconfirmed, checked in, checked out).
- Manage booking actions such as checking in/out guests, accepting payments, and adding additional services like breakfast.

### Cabins

- Display all cabins with relevant details.
- Create, update, or delete cabin records.
- Upload photos for cabins.

### Guests

- Manage guest data, including personal information and booking history.
- Identify guests easily with nationality flags.

### Check-In/Check-Out

- Perform guest check-in/check-out operations directly from the dashboard or booking details page.
- Add breakfast options during check-in if not already included in the booking.

### Application Settings

- Configure hotel-wide settings such as breakfast pricing, minimum and maximum booking durations, and maximum guest capacity per booking.

### Authentication

- Secure login for hotel employees.
- Manage user accounts, including avatar upload, name, and password changes.
- Sign-up functionality restricted to internal use only.

## Technology Stack

The following technologies and tools were used to build **The Wild Oasis**:

- ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react) **React 18**: Frontend library for building user interfaces.
- ![Vite](https://img.shields.io/badge/Vite-2B%20-%2341B883?logo=vite) **Vite**: Next-generation frontend tooling for faster builds and development.
- ![React Router](https://img.shields.io/badge/React%20Router-v6-CA4245?logo=reactrouter) **React Router**: Declarative routing for React applications.
- ![Styled Components](https://img.shields.io/badge/Styled%20Components-DB7093?logo=styled-components) **Styled Components**: CSS-in-JS library for styling components.
- ![React Query](https://img.shields.io/badge/React%20Query-v3-FF4154?logo=react-query) **React Query**: Remote state management tool for fetching, caching, and updating server data.
- ![Context API](https://img.shields.io/badge/Context%20API-61DAFB?logo=react) **Context API**: React's built-in tool for managing UI state across components.
- ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-v7-EC5990?logo=react-hook-form) **React Hook Form**: Library for managing form state and validation.
- ![React Icons](https://img.shields.io/badge/React%20Icons-61DAFB?logo=react) **React Icons**: A library of popular icons for React projects.
- ![React Hot Toast](https://img.shields.io/badge/React%20Hot%20Toast-FF5733?logo=react) **React Hot Toast**: Notifications and toasts for user feedback.
- ![Recharts](https://img.shields.io/badge/Recharts-v2-61DAFB?logo=recharts) **Recharts**: Charting library for creating data visualizations.
- ![date-fns](https://img.shields.io/badge/date--fns-2B6BB3?logo=date-fns) **date-fns**: Library for date manipulation and formatting.
- ![Supabase](https://img.shields.io/badge/Supabase-v1-3ECF8E?logo=supabase) **Supabase**: Backend-as-a-Service for the database, authentication, and storage.

## Installation and Setup

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/the-wild-oasis.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd the-wild-oasis
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. **Open your browser and go to**:
   ```bash
   http://localhost:5173
   ```

## Project Structure

The project is organized into the following key pages:

| Feature Category          | Necessary Pages                |
| ------------------------- | ------------------------------ |
| 1. Dashboard              | `/dashboard`                   |
| 2. Bookings               | `/bookings`                    |
| 3. Cabins                 | `/cabins`                      |
| 4. Guests                 | `/guests`                      |
| 5. Check-In and Check-Out | `/checkin/:bookingId`          |
| 6. App Settings           | `/settings`                    |
| 7. Authentication         | `/login`, `/users`, `/account` |

## Screenshots

Below are screenshots showcasing different parts of the application:

1. **Login Page** (`/login`):
   ![Login Page](screenshots/login%20page%20of%20wild%20oasis.png)
2. **Dashboard (Light Mode)** (`/dashboard`):
   ![Dashboard Light Mode](screenshots/home%20page%20of%20wild%20oasis%20normal%20mode.png)
3. **Dashboard (Dark Mode)** (`/dashboard`):
   ![Dashboard Dark Mode](screenshots/home%20page%20of%20wild%20oasis%20darkmode.png)
4. **Bookings Overview** (`/bookings`):
   ![Bookings Overview](screenshots/all%20bookings%20of%20wild%20oasis.png)
5. **Cabins Overview** (`/cabins`):
   ![Cabins Overview](screenshots/all%20cabins%20of%20wild%20oasis.png)
6. **Booking Details** (`/bookings/:bookingId`):
   ![Booking Details](screenshots/booking%20details%20checked%20in%20already%20in%20wild%20oasis.png)
7. **Check-In Page** (`/checkin/:bookingId`):
   ![Check-In Page](screenshots/page%20of%20check%20in%20to%20do%20check%20in%20a%20user%20in%20wild%20oasis.png)
8. **User Creation Page** (`/users`):
   ![User Creation Page](screenshots/craete%20new%20user%20in%20wild%20oasis.png)
9. **Account Settings Page** (`/account`):
   ![Account Settings Page](screenshots/update%20your%20account%20in%20wild%20oasis.png)
10. **Hotel Settings Page** (`/settings`):
    ![Hotel Settings Page](screenshots/update%20hotel%20setting%20in%20wild%20oasis.png)

## Demo Access

This project is a private internal application with a secure authentication system, and access is restricted to hotel staff accounts. However, if you're a recruiter or developer and would like to explore the app for evaluation purposes, feel free to reach out.

- ✅ I’ll be happy to provide demo access upon request.
- 🔒 Sign-up is disabled for public users to maintain security.

Please contact me via email or LinkedIn (links below), and I’ll send you access credentials along with guidance on how to use the app.

## Contact

For any inquiries or further information, please feel free to reach out:

- 📧 **Email**: [hello@paulanik.com](mailto:hello@paulanik.com)
- 🌐 **Portfolio**: [paulanik.com](https://paulanik.com)
- 💼 **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/anik-paul-dev/)
- 📝 **Dev.to**: [Dev.to Profile](https://dev.to/anikpaul)
