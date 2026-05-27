# Car Shop

Full Stack Car Management Application built with:

- Spring Boot
- React
- MariaDB
- Docker
- Docker Compose
- Spring Security
- Spring AI + Ollama

---

# Features

- User Registration & Login
- Spring Security Authentication
- Add / Update / Delete Cars
- Car List Management
- AI Car Advisor powered by Ollama
- REST API with Spring Data REST
- Dockerized Backend & Database

---

# Project Structure

```text
backend/   -> Spring Boot backend
frontend/  -> React frontend
k8s/       -> Kubernetes manifests
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

# 3. Start Ollama Container

```bash
docker start ollama
```

If Ollama container does not exist yet:

```bash
docker run -d --name ollama -p 11434:11434 ollama/ollama
```

Pull the AI model:

```bash
docker exec -it ollama ollama pull llama3.2
```

Verify installed models:

```bash
docker exec -it ollama ollama list
```

---

# 4. Run Backend + Database with Docker Compose

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

# 5. Run Frontend

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

# 6. Authentication

Users must:

1. Register a new account
2. Login
3. Access the application features

Available features after login:

- Add Car
- Car List
- AI Advisor

---

# 7. AI Advisor

After login, users can access the AI Advisor page.

Example prompts:

```text
I need a cheap family car under 200000 MAD
```

```text
Recommend a black sporty car
```

The AI recommends cars based on the cars available in the database.

---

# 8. Useful Docker Commands

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

## Stop Ollama

```bash
docker stop ollama
```

---


# Kubernetes Deployment (Minikube)

## Folder Structure

```text
k8s/
 ├── app-deployment.yaml
 ├── db-deployment.yaml
 ├── mariadb-config.yaml
 ├── mariadb-secrets.yaml
```
## Start Minikube
```bash
minikube start
```

## Build Backend Docker Image
```bash
cd backend
mvn clean package -DskipTests
docker build -t springboot-app:latest .
cd ..
```
## Deploy to Kubernetes
```bash
cd k8s
kubectl apply -f k8s/mariadb-config.yaml
kubectl apply -f k8s/mariadb-secrets.yaml
kubectl apply -f k8s/db-deployment.yaml
kubectl apply -f k8s/app-deployment.yaml
```
## Check Status
```bash
kubectl get pods
kubectl get services
minikube service spring-app-svc --url
```

## Example:
```text
http://127.0.0.1:60015
```
## Stop Kubernetes Deployment
```bash
kubectl delete -f k8s/
minikube stop
```
