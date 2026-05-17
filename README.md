# Car Shop

Full Stack Car Management Application built with:

- Spring Boot
- React
- MariaDB
- Docker
- Docker Compose

---

# Project Structure

```text
backend/   -> Spring Boot backend
frontend/  -> React frontend
```

---

# Prerequisites

Before running the project, make sure you have installed:

- Docker Desktop
- Node.js
- Git
- Maven

---

# 1. Clone the Repository

```bash
git clone https://github.com/dohaAz/CarShop.git
cd CarShop
```

---

# 2. Build the Spring Boot Application

Open a terminal inside the backend folder:

```bash
cd backend
mvn clean package -DskipTests
cd ..
```

---

# 3. Run Backend + Database with Docker Compose

```bash
docker-compose up -d --build
```

This will start:

- Spring Boot backend on port 9090
- MariaDB database on port 3307

Backend API:

```text
http://localhost:9090/api/cars
```

---

# 4. Run Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

Frontend URL:

```text
http://localhost:3000
```

---

# 5. Useful Docker Commands

## Check running containers

```bash
docker ps
```

## Stop the project

```bash
docker-compose down
```

## Restart the project

```bash
docker-compose up -d
```

## View backend logs

```bash
docker logs carshop-springboot-app-1
```

## View database logs

```bash
docker logs mariadb
```

---

# Technologies Used

- Spring Boot
- Spring Data REST
- React
- Axios
- MariaDB
- Docker
- Docker Compose

