
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
├── tmp
├── └── uploads                   # for cloudinary images
├── .env                          # Environment variables
├── package.json
└── README.md

```


#### Environmrnt Variable
```plaintext
PORT=5000
MONGO_URI=your mongobd url
JWT_SECRET= generate a jwt token
JWT_EXPIRES_IN=7d
ADMIN_EMAIL=give a email
ADMIN_PASSWORD=any pass
CLOUDINARY_CLOUD_NAME=your cloudinary name
CLOUDINARY_API_KEY=your cloudinary api key
CLOUDINARY_API_SECRET=your cloudinary api secret

```
