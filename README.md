# 🔄 Week 5: Real-Time Communication with Socket.io

## 📌 Overview
This project is a real-time chat application built using **Node.js**, **Express**, **Socket.io**, and **React**. The application demonstrates bi-directional communication between the server and multiple clients, enabling live messaging, user status updates, private messaging, and rich notification features.

---

## 🚀 Objective
To build a responsive, scalable, and interactive chat app that:
- Uses **Socket.io** for real-time client-server communication
- Supports **public** and **private** chat functionality
- Displays **live user status**, **typing indicators**, and **notifications**
- Enhances user experience with **message receipts**, **media sharing**, and **UX optimizations**

---

## 📂 Tasks Breakdown

### ✅ Task 1: Project Setup
- [x] Set up a Node.js server with Express
- [x] Configure Socket.io on the backend
- [x] Create a React-based frontend
- [x] Establish basic WebSocket connection between frontend and backend

---

### 💬 Task 2: Core Chat Functionality
- [x] Simple username-based authentication
- [x] Global chat room for all connected users
- [x] Display sender name and timestamp for each message
- [x] Show typing indicators while composing
- [x] Indicate online/offline user status

---

### ✨ Task 3: Advanced Chat Features
- [ ] Private messaging between individual users
- [ ] Multiple chat rooms/channels
- [ ] Enhanced "user is typing" logic
- [ ] File/image sharing support
- [ ] Read receipts per message
- [ ] Message reactions (e.g., 👍 ❤️ 😂)

---

### 🔔 Task 4: Real-Time Notifications
- [ ] Instant notification for new messages
- [ ] Alerts when a user joins or leaves a room
- [ ] Unread message count display
- [ ] Sound notifications
- [ ] Browser-based notifications via the Web Notifications API

---

### ⚙️ Task 5: Performance & UX Optimization
- [ ] Message pagination (lazy load older chats)
- [ ] Auto-reconnect on network failures
- [ ] Use Socket.io namespaces and rooms for scalability
- [ ] Message delivery acknowledgments
- [ ] In-app message search
- [ ] Responsive design for both desktop and mobile

---

## 🛠️ Tech Stack

| Tool            | Purpose                          |
|-----------------|----------------------------------|
| Node.js + Express | Backend server & APIs           |
| Socket.io       | Real-time bi-directional communication |
| React           | Frontend UI                      |
| CSS / Tailwind  | Styling and responsive layout    |
| MongoDB (optional) | Persistent data storage (users/messages) |

---

## 🧪 How to Run the App

### Backend
```bash
cd server
pnpm install
pnpm run dev

```

##Frontend
```bash
Copy code
cd client
pnpm install
pnpm run dev

```
📄 License

