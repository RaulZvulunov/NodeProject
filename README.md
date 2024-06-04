# Project Title: REST API for Business Management

## Overview
This project involves the development of a REST API server that provides backend support for an internet-based business management system. The API allows users to register, login, manage user accounts, and handle business cards. It uses MongoDB for data storage, and various libraries to enhance functionality and security.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side programming
- **Express.js**: Web framework for building the API
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB
- **bcryptjs**: Library for hashing passwords
- **joi**: Library for data validation
- **jsonwebtoken**: Library for creating and verifying JWT tokens
- **morgan**: HTTP request logger middleware
- **cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing)
- **chalk**: Library for terminal string styling

## Project Structure
The project is organized into several modules, each responsible for different aspects of the application:
- **User Management**: Handles user registration, login, and account management
- **Card Management**: Allows business users to create, edit, and delete business cards
- **Logging**: Logs all HTTP requests and errors
- **Utilities**: Includes helper functions and configurations

## Functionality
### User Endpoints
1. **Register a new user**
   - Method: POST
   - URL: `/users`
   - Authorization: None
   - Request Body: `{ "email": "unique_email", "password": "password" }`
   - Response: `{ "message": "User registered successfully", "token": "JWT token" }`

2. **Login**
   - Method: POST
   - URL: `/users/login`
   - Authorization: None
   - Request Body: `{ "email": "email", "password": "password" }`
   - Response: `{ "message": "Login successful", "token": "JWT token" }`

3. **Get all users**
   - Method: GET
   - URL: `/users`
   - Authorization: Admin
   - Response: `[ { "id": "user_id", "email": "email" }, ... ]`

4. **Get user by ID**
   - Method: GET
   - URL: `/users/:id`
   - Authorization: Registered user or Admin
   - Response: `{ "id": "user_id", "email": "email" }`

5. **Edit user**
   - Method: PUT
   - URL: `/users/:id`
   - Authorization: Registered user
   - Request Body: `{ "email": "new_email" }`
   - Response: `{ "message": "User updated successfully" }`

6. **Change business status**
   - Method: PATCH
   - URL: `/users/:id`
   - Authorization: Registered user
   - Request Body: `{ "isBusiness": true/false }`
   - Response: `{ "message": "Business status updated" }`

7. **Delete user**
   - Method: DELETE
   - URL: `/users/:id`
   - Authorization: Registered user or Admin
   - Response: `{ "message": "User deleted successfully" }`

### Card Endpoints
1. **Get all cards**
   - Method: GET
   - URL: `/cards`
   - Authorization: None
   - Response: `[ { "id": "card_id", "title": "card_title" }, ... ]`

2. **Get user cards**
   - Method: GET
   - URL: `/cards/my-cards`
   - Authorization: Registered user
   - Response: `[ { "id": "card_id", "title": "card_title" }, ... ]`

3. **Get card by ID**
   - Method: GET
   - URL: `/cards/:id`
   - Authorization: None
   - Response: `{ "id": "card_id", "title": "card_title" }`

4. **Create new card**
   - Method: POST
   - URL: `/cards`
   - Authorization: Business user
   - Request Body: `{ "title": "card_title", "description": "card_description" }`
   - Response: `{ "message": "Card created successfully", "card": { "id": "card_id", "title": "card_title" } }`

5. **Edit card**
   - Method: PUT
   - URL: `/cards/:id`
   - Authorization: Card creator
   - Request Body: `{ "title": "new_title", "description": "new_description" }`
   - Response: `{ "message": "Card updated successfully" }`

6. **Like card**
   - Method: PATCH
   - URL: `/cards/:id`
   - Authorization: Registered user
   - Response: `{ "message": "Card liked" }`

7. **Delete card**
   - Method: DELETE
   - URL: `/cards/:id`
   - Authorization: Card creator or Admin
   - Response: `{ "message": "Card deleted successfully" }`

## Logging
- **Morgan**: Logs all incoming requests with details such as method, URL, status, and response time.
- **Chalk**: Styles log output for better readability.

## Middleware and Security
- **CORS**: Configured to allow requests from specified origins.
- **JSON Web Tokens (JWT)**: Used for secure authentication and authorization.
- **bcryptjs**: Passwords are hashed before storing in the database for enhanced security.
- **Joi**: Ensures data validation for incoming requests.

## Environment Configuration
- Local and cloud environments are supported.
- Use environment variables for configuring sensitive data such as database URLs and secret keys.

## Initial Data
The project includes initial data for testing purposes:
- Three users: a regular user, a business user, and an admin.
- Three business cards created by the business user.

