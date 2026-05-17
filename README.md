# Car Shop

Full Stack Car Management Application built with Spring Boot, React, MariaDB, Docker and Docker Compose.

## Project Structure

```text
backend/   -> Spring Boot backend
frontend/  -> React frontend
Prerequisites

Before running the project, make sure you have installed:

Docker Desktop
Node.js
Git
1. Clone the repository
git clone https://github.com/dohaAz/CarShop.git
cd CarShop
2. Run Backend + Database with Docker Compose
docker-compose up -d --build

This will start:

Spring Boot backend on port 9090
MariaDB database on port 3307

Backend API:

http://localhost:9090/api/cars
3. Run Frontend

Open another terminal:

cd frontend
npm install
npm start

Frontend URL:

http://localhost:3000
4. Useful Docker Commands

Check running containers:

docker ps

Stop the project:

docker-compose down

Restart the project:

docker-compose up -d

View backend logs:

docker logs carshop-springboot-app-1

View database logs:

docker logs mariadb
Technologies Used
Spring Boot
Spring Data REST
React
Axios
MariaDB
Docker
Docker Compose