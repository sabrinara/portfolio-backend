Demo 

https://ciphergirl.github.io/



https://github.com/faisal-akbar/b5a7-client?tab=readme-ov-file


https://github.com/faisal-akbar/b5a7-server?tab=readme-ov-file


### Structure

```plaintext
portfolio-backend/
│
├── src/
│   ├── config/
│   │   ├── cloudinary.js         # Cloudinary configuration
│   │   └── db.js                 # Database connection
│   │
│   ├── middleware/
│   │   └── authMiddleware.js     # Authentication middleware
│   │
│   ├── models/                   # Mongoose models
│   │   ├── Intro.js
│   │   ├── Experience.js
│   │   ├── Project.js
│   │   ├── Achievement.js
│   │   └── Blog.js
│   │
│   ├── routes/                   # API routes
│   │   ├── introRoutes.js
│   │   ├── experienceRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── achievementRoutes.js
│   │   ├── blogRoutes.js
│   │   ├── authRoutes.js
│   │   └── uploadRoutes.js
│   │
│   ├── controllers/              # Controllers
│   │   ├── introController.js
│   │   ├── experienceController.js
│   │   ├── projectController.js
│   │   ├── achievementController.js
│   │   ├── blogController.js
│   │   ├── authController.js
│   │   └── uploadController.js
│   │
│   └── server.js                  # Entry point
│
├── .env                          # Environment variables
├── package.json
└── README.md

```
