# MERN Feed App

A basic full-stack social media feed application built using the **MERN stack** — MongoDB, Express.js, React.js, and Node.js.

Users can create posts by uploading an image and adding a caption. The post data is sent to the backend and stored in **MongoDB Atlas**, while the feed page dynamically displays the created posts.

## 🚀 Features

* Create a post with an image and caption
* Store post data in MongoDB Atlas
* Display posts dynamically on the feed page
* REST API-based backend
* React.js frontend
* Express.js and Node.js backend

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **API:** REST API
* **Development:** Vite, VS Code

## 📂 Main Pages

### Create Post

Allows users to:

* Select/upload an image
* Add a caption
* Submit the post to the backend

### Feed

Displays the posts created through the Create Post page.

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/code-yashkumar/feed-app.git
cd feed-app
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

Start the development server:

```bash
npm run dev
```

## 🔐 Environment Variables

Do not commit your `.env` file to GitHub.

Add it to `.gitignore`:

```gitignore
.env
node_modules/
```

## 📌 Future Improvements

* User authentication and authorization
* Like and comment functionality
* User profiles
* Delete and edit posts
* Image hosting using Cloudinary or similar services
* Responsive UI improvements

## 👨‍💻 Author

**Yash Kumar**

Built as a learning project to practice full-stack development with the MERN stack.
