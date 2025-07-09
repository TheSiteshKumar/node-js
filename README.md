# 🚀 Node.js Learning Projects

Welcome to this collection of beginner-friendly Node.js projects! This repository contains 3 simple projects to help you learn Node.js fundamentals.

## 📁 Projects Overview

| Project | Description | Key Concepts |
|---------|-------------|--------------|
| **01-todo** | Command-line todo app | File system, JSON, CLI arguments |
| **02-create-server** | Simple web server | HTTP server, file serving, routing |
| **03-events** | Event handling demo | EventEmitter, asynchronous events |

---

## 🗂️ Project 1: Todo App (`01-todo`)

A simple command-line todo application that stores tasks in a JSON file.

### 📋 Features
- ✅ Add new tasks
- 📝 List all tasks
- ✏️ Update existing tasks
- 🗑️ Delete tasks
- 💾 Data persists in `todo.json`

### 🚀 How to Use

```bash
# Navigate to the todo folder
cd 01-todo

# Add a new task
node todo.js add "buy groceries"

# Show all tasks
node todo.js list

# Update task number 1
node todo.js update 1 "buy organic groceries"

# Delete task number 2
node todo.js delete 2

# Get help
node todo.js help
```

### 📝 Example Output
```
✅ Added task: "buy groceries"

📋 Your Todo List:
==================
1. buy groceries
2. walk the dog
==================
```

### 🛠️ What You'll Learn
- Reading and writing files with `fs`
- Working with JSON data
- Processing command-line arguments
- Error handling
- Array manipulation

---

## 🌐 Project 2: Web Server (`02-create-server`)

A simple HTTP server that serves HTML files from the current directory.

### 📋 Features
- 🌍 Serves HTML files to web browsers
- 🏠 Homepage at `/` shows `index.html`
- 📄 Direct file access (e.g., `/about.html`)
- ❌ Friendly 404 error pages
- 📊 Request logging

### 🚀 How to Use

```bash
# Navigate to the server folder
cd 02-create-server

# Start the server
node server.js

# You'll see:
# 🎉 Server is running!
# 🌐 Open your browser and go to: http://localhost:4000
```

### 🌐 Available Pages
- `http://localhost:4000/` - Homepage (index.html)
- `http://localhost:4000/about.html` - About page
- `http://localhost:4000/contact.html` - Contact page

### 🛠️ What You'll Learn
- Creating HTTP servers with `http` module
- Handling requests and responses
- File path manipulation with `path`
- Reading files asynchronously
- Basic routing
- Error handling for web servers

---

## ⚡ Project 3: Events (`03-events`)

Demonstrates Node.js EventEmitter for handling asynchronous events.

### 📋 Features
- 📤 Simulates file upload process
- 🎯 Event-driven programming
- ⏱️ Asynchronous event handling
- 📢 Custom event emission

### 🚀 How to Use

```bash
# Navigate to the events folder
cd 03-events

# Run the event demo
node Logger.js

# You'll see:
# Uploading...
# (2 second delay)
# ✅ File uploaded: resume.pdf
```

### 🛠️ What You'll Learn
- Using EventEmitter class
- Creating custom events
- Listening for events with `.on()`
- Emitting events with `.emit()`
- Asynchronous programming with `setTimeout`
- Event-driven architecture patterns

---

## 🎯 Getting Started

### Prerequisites
- Node.js installed on your computer
- Basic knowledge of JavaScript
- Command line/terminal access

### Installation
1. Clone or download this repository
2. Open terminal/command prompt
3. Navigate to any project folder
4. Run the commands shown above

### 📚 Learning Path
1. **Start with 01-todo** - Learn file operations and CLI
2. **Move to 02-create-server** - Understand web servers
3. **Finish with 03-events** - Master event-driven programming

---

## 🔧 Troubleshooting

### Common Issues

**Port already in use (02-create-server)**
```bash
# If port 4000 is busy, kill the process or change PORT in server.js
```

**File not found errors (01-todo)**
```bash
# Make sure you're in the correct directory
# The todo.json file will be created automatically
```

**Module not found**
```bash
# Make sure you're using Node.js built-in modules
# No npm install needed for these projects
```

---

## 🎓 Next Steps

After completing these projects, you'll be ready to:
- Learn Express.js for advanced web servers
- Explore databases (MongoDB, PostgreSQL)
- Build REST APIs
- Learn about middleware and authentication
- Explore real-time applications with Socket.io

---

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Make sure Node.js is properly installed
3. Verify you're in the correct directory
4. Check for typos in commands

---

## 🏆 Congratulations!

You've learned the fundamentals of Node.js! These projects cover:
- ✅ File system operations
- ✅ HTTP server creation
- ✅ Event-driven programming
- ✅ Asynchronous JavaScript
- ✅ Command-line applications

Keep coding and building amazing things! 🚀

---

*Made with ❤️ for Node.js beginners*