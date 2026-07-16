# Docker Integration Guide – Secure Contact Portal

This guide explains how to run the **Secure Contact Portal** using **Docker**. By the end of this guide, you will understand how Docker packages an application, creates containers, and runs the complete MERN application with a single command.

---

# Project Architecture

```text
                     Docker Engine
                           │
         ┌─────────────────┴─────────────────┐
         ▼                                   ▼
React Frontend Container            Node.js Backend Container
(Vite + React)                      (Express API)
         │                                   │
         └────────────── API ────────────────┘
                           │
                           ▼
                    MongoDB Atlas
```

> **Note:** MongoDB is **not** running inside Docker because we are using **MongoDB Atlas**.

---

# Project Structure

```text
secure-contact-portal/

│
├── client/
│   ├── Dockerfile
│   ├── package.json
│   ├── .env
│   └── src/
│
├── server/
│   ├── Dockerfile
│   ├── package.json
│   ├── .env
│   └── src/
│
├── docker-compose.yml
├── .dockerignore
└── README.md
```

---

# Prerequisites

Before running Docker, make sure you have:

* Docker Desktop installed and running
* MongoDB Atlas Cluster created
* MongoDB Database User configured
* Project working normally using `npm run dev`

Verify Docker installation:

```bash
docker --version
```

Example:

```text
Docker version 28.x.x
```

---

# Step 1 – Verify Docker Desktop

Open Docker Desktop.

Wait until you see:

```text
Docker Desktop is running
```

---

# Step 2 – Open Project

```bash
cd secure-contact-portal
```

You should be inside the project root where `docker-compose.yml` exists.

---

# Step 3 – Check Docker Files

Ensure the following files exist:

```
client/
    Dockerfile

server/
    Dockerfile

docker-compose.yml

.dockerignore
```

---

# Step 4 – Backend Dockerfile

Location:

```
server/Dockerfile
```

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8888

CMD ["npm","run","dev"]
```

### Explanation

| Command  | Purpose                         |
| -------- | ------------------------------- |
| FROM     | Downloads Node.js image         |
| WORKDIR  | Creates `/app` inside container |
| COPY     | Copies package files            |
| RUN      | Installs dependencies           |
| COPY . . | Copies project source           |
| EXPOSE   | Opens backend port              |
| CMD      | Starts Express server           |

---

# Step 5 – Frontend Dockerfile

Location:

```
client/Dockerfile
```

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run","dev","--","--host"]
```

### Why `--host`?

Normally Vite only listens on `localhost`.

Inside Docker that would make the application inaccessible from your browser.

Using

```text
--host
```

allows Vite to accept connections from outside the container.

---

# Step 6 – Root .dockerignore

Location:

```
.dockerignore
```

```text
.git
.gitignore

node_modules
**/node_modules

**/logs

README.md
```

### Why?

It prevents Docker from copying unnecessary files into the image, making builds faster and images smaller.

---

# Step 7 – docker-compose.yml

Location:

```
docker-compose.yml
```

```yaml
services:

  backend:

    build: ./server

    container_name: secure-contact-backend

    ports:
      - "8888:8888"

    env_file:
      - ./server/.env

    volumes:
      - ./server:/app
      - /app/node_modules

    restart: unless-stopped

  frontend:

    build: ./client

    container_name: secure-contact-frontend

    ports:
      - "5173:5173"

    depends_on:
      - backend

    environment:
      - VITE_API_BASE_URL=http://localhost:8888/api

    volumes:
      - ./client:/app
      - /app/node_modules

    stdin_open: true

    tty: true

    restart: unless-stopped
```

---

# Step 8 – Build Docker Images

Run from the project root:

```bash
docker compose build
```

Docker will:

* Build Backend Image
* Build Frontend Image

---

# Step 9 – Start Containers

```bash
docker compose up
```

Or

```bash
docker compose up --build
```

Docker will:

* Create containers
* Start backend
* Start frontend
* Connect containers through Docker Network

---

# Step 10 – Verify Running Containers

```bash
docker ps
```

Expected:

```text
secure-contact-backend

secure-contact-frontend
```

---

# Step 11 – Open Application

Frontend

```
http://localhost:5173
```

Backend Health Check

```
http://localhost:8888/api/health
```

Expected response:

```json
{
    "success": true,
    "message": "Server is running successfully."
}
```

---

# Step 12 – Test Application

Fill the contact form.

Click

```
Send Message
```

Verify:

* Form submitted successfully
* Data stored in MongoDB Atlas
* Backend logs generated

---

# Step 13 – Check Docker Images

```bash
docker images
```

Example:

```text
secure-contact-backend

secure-contact-frontend
```

Images are templates used to create containers.

---

# Step 14 – Check Running Containers

```bash
docker ps
```

Shows all currently running containers.

---

# Step 15 – View Container Logs

Backend

```bash
docker logs secure-contact-backend
```

Frontend

```bash
docker logs secure-contact-frontend
```

Useful for debugging application errors.

---

# Step 16 – Enter a Running Container

Backend

```bash
docker exec -it secure-contact-backend sh
```

Now you are inside the Linux container.

Useful commands:

```bash
pwd

ls

node -v

npm -v
```

Exit

```bash
exit
```

---

# Step 17 – Check Docker Network

```bash
docker network ls
```

You will see a network similar to:

```text
secure-contact-portal_default
```

Inspect it:

```bash
docker network inspect secure-contact-portal_default
```

Both frontend and backend containers are connected to this network.

---

# Step 18 – Stop Containers

```bash
docker compose down
```

Stops and removes all containers.

---

# Step 19 – Rebuild Containers

If you make Dockerfile changes:

```bash
docker compose down

docker compose up --build
```

---

# Useful Docker Commands

### Build Images

```bash
docker compose build
```

---

### Start Containers

```bash
docker compose up
```

---

### Build & Start Together

```bash
docker compose up --build
```

---

### Stop Containers

```bash
docker compose down
```

---

### Running Containers

```bash
docker ps
```

---

### Docker Images

```bash
docker images
```

---

### Container Logs

```bash
docker logs secure-contact-backend

docker logs secure-contact-frontend
```

---

### Enter Container

```bash
docker exec -it secure-contact-backend sh
```

---

### Docker Networks

```bash
docker network ls
```

---

### Inspect Network

```bash
docker network inspect secure-contact-portal_default
```

---

# Docker Concepts Learned

| Component      | Description                                          |
| -------------- | ---------------------------------------------------- |
| Dockerfile     | Blueprint used to build an image                     |
| Image          | Packaged snapshot of the application                 |
| Container      | Running instance of an image                         |
| Docker Compose | Runs multiple containers together                    |
| Volumes        | Share project files between host and container       |
| Network        | Allows containers to communicate using service names |
| Port Mapping   | Connects host machine ports to container ports       |

---

# Complete Docker Workflow

```text
Project Source
       │
       ▼
Dockerfile
       │
docker compose build
       │
       ▼
Docker Images
       │
docker compose up
       │
       ▼
Docker Containers
       │
       ▼
React ↔ Express ↔ MongoDB Atlas
```

---





---

# Imagine You're Building a React + Node Project

Normally you have

```text
Secure Contact Portal

↓

React

↓

Express

↓

MongoDB Atlas
```

Now Docker comes into the picture.

---


# Docker Image

A Docker Image is like:

> 📸 A snapshot of your application.

It contains

```text
Node

Express

Source Code

node_modules

Everything Required
```

It is **read-only**.

You cannot "run code" inside an image.

---

Run

```bash
docker images
```

You'll see something like

```text
REPOSITORY

secure-contact-backend

TAG

latest
```

This is your Image.

Think of it like:

```text
Image

↓

Blueprint

↓

Template

↓

Snapshot
```

---

# Step 3 — Docker Container

Now you run

```bash
docker compose up
```

or

```bash
docker run secure-contact-backend
```

Docker says

> "Take this Image and create a running application."

That running application is called a

# Container

Run

```bash
docker ps
```

You'll see

```text
secure-contact-backend

STATUS

Up
```

That is a Container.

---

# Pizza Example 🍕

Imagine Domino's.

Recipe

↓

Bake Pizza

↓

Serve Pizza

Recipe

=

Dockerfile

---

Cooked Pizza

=

Docker Image

---

Pizza on your table

=

Docker Container

---


# One Image Can Create Many Containers

This is important.

One Image

↓

Can create

```text
Container 1

Container 2

Container 3

Container 4
```

Example

```bash
docker run secure-contact-backend
```

creates

```text
Container A
```

Run again

```bash
docker run secure-contact-backend
```

creates

```text
Container B
```

Same Image.

Different Containers.

Exactly like

One APK

↓

Installed on

Phone A

Phone B

Phone C

APK

=

Image

Installed App

=

Container

---

# Image vs Container

| Docker Image                 | Docker Container                                 |
| ---------------------------- | ------------------------------------------------ |
| Blueprint                    | Running application                              |
| Read-only                    | Read/Write                                       |
| Built using Dockerfile       | Created from an Image                            |
| Created using `docker build` | Created using `docker run` / `docker compose up` |
| Listed with `docker images`  | Listed with `docker ps`                          |
| Can create many containers   | Runs only one instance                           |

---

# The Lifecycle

```text
Dockerfile
      │
      ▼
docker build
      │
      ▼
Docker Image
      │
docker run
      │
      ▼
Docker Container
      │
Application Running
```

---


So:

* **Dockerfile** = Instructions for building.
* **Image** = Packaged, reusable template.
* **Container** = A live, running instance created from that template.

This mental model makes it much easier to understand why you **build an image once** but can **run many containers** from it.
