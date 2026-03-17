# NTI E-Learn Backend

A Node.js + Express + MongoDB e-learning backend API with authentication, roles (student/admin), courses, lessons, enrollment, and admin user management.

## 🚀 Features

- User authentication and token management
  - Register
  - Login
  - Refresh token
  - Forgot password and reset password token flow
  - Logout
- User profile and avatar upload
  - Get profile (protected)
  - Update profile
  - Change password
  - Upload avatar image
- Role-based routes (student/admin)
- Courses API
  - Create course
  - List courses
  - Get course by ID
  - Update course
  - Delete course
- Lessons API
  - Create lesson
  - List lessons
  - Get lesson by ID
  - Update lesson
  - Delete lesson
- Enrollment API
  - Enroll in course
  - List enrollments
  - Delete enrollment
- Admin user management
  - List all users
  - Get user by ID
  - Update user role
  - Delete user
- Security middleware
  - Helmet
  - CORS
  - Rate limiting
  - Global error handler and 404 handler

## 📁 Project Structure

```
index.js
src/
  main.js
  config/
    env.js
  DB/
    connection.js
    models/
      user.model.js
      course.model.js
      lesson.model.js
      enrollment.model.js
  middlewares/
    authentication.middleware.js
    authorization.middleware.js
    validation.middleware.js
    upload.middleware.js
    ratelimit.middleware.js
    errorHandler.middleware.js
    notFound.middleware.js
  modules/
    auth/
      auth.routes.js
      auth.controller.js
      services/auth.service.js
      validation/auth.validation.js
    users/
      user.routes.js
      user.controller.js
      services/user.service.js
      validation/user.validation.js
    admin/
      admin.routes.js
      admin.controller.js
      services/admin.service.js
      validation/admin.validation.js
    course/
      course.routes.js
      course.controller.js
      services/course.service.js
      validation/course.validation.js
    lesson/
      lesson.routes.js
      lesson.controller.js
      services/lesson.service.js
      validation/lesson.validation.js
    enrollment/
      course/enrollment.routes.js
      course/enrollment.controller.js
      course/services/enrollment.service.js
      course/validation/enrollment.validation.js
  utils/
    routerHandler.js
    APIErrors.js
    APIResponse.js
    asyncHandler.js
    email.utils.js
    encrypt.js
    jwt.utils.js
    password.utils.js
    upload.utils.js
```

## ⚙️ Setup

1. Clone project
2. Install dependencies
   ```bash
   npm install
   ```
3. Create `.env` with your config values (PORT, DB connection, JWT secrets, Cloudinary config, etc.)
4. Start server
   ```bash
   npm run dev
   ```
5. Visit `http://localhost:<PORT>` for API endpoints.

## 🧭 API Endpoints

### Auth Routes (`/auth`)
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh-token`
- `POST /auth/forgot-password`
- `GET /auth/reset-password/:token`
- `POST /auth/logout`

### User Routes (`/users`)
- `GET /users/profile` (auth + student)
- `PUT /users/profile` (auth)
- `POST /users/change-password` (auth)
- `PUT /users/profile/avatar` (auth + file upload)
- `GET /users/admin/all` (auth + admin)

### Course Routes (`/courses`)
- `GET /courses`
- `POST /courses`
- `GET /courses/:id`
- `PUT /courses/:id`
- `DELETE /courses/:id`

### Lesson Routes (`/lessons`)
- `GET /lessons`
- `POST /lessons`
- `GET /lessons/:id`
- `PUT /lessons/:id`
- `DELETE /lessons/:id`

### Enrollment Routes (`/enrollments`)
- `GET /enrollments`
- `POST /enrollments`
- `DELETE /enrollments/:id`

### Admin Routes (`/admin`)
- `GET /admin/users`
- `GET /admin/users/:id`
- `PUT /admin/users/:id/role`
- `DELETE /admin/users/:id`

## 🔐 Auth / Header Notes
- Protected endpoints require `Authorization: Bearer <token>`.
- Profile + admin endpoints use middleware for role checks.

## 📦 Dependencies
- express, mongoose, dotenv, jsonwebtoken, bcrypt, joi, multer, cloudinary, helmet, cors, express-rate-limit, express-mongo-sanitize, xss-clean, nodemailer

## 💡 Tips
- Ensure your MongoDB URI and JWT secrets are set in `.env`.
- For file uploads, Cloudinary config must be set correctly.
- Use Postman to test route-level validation quickly.

---
