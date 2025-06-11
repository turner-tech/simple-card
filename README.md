# Lingua Card: Portuguese Flashcards App

## Overview
Lingua Card is a simple flashcard web application designed to help you practice and improve your Portuguese vocabulary. It serves interactive flashcards via a local web server.

## Features
- Interactive flashcards for Portuguese vocabulary
- Filter cards by category, part of speech, or difficulty level
- Study mode with card flipping and keyboard navigation
- Clean, user-friendly interface
- Easily extensible with your own data

## Getting Started

### Prerequisites
- Python 3.x installed on your system

### Installation & Launch
1. **Clone or download this repository.**
2. **Open a terminal and navigate to the project directory.**
3. **Start the local server:**
   ```bash
   python3 server.py
   ```
4. **Open your browser and go to:**
   [http://localhost:8000](http://localhost:8000)

### File Structure
- `server.py`: Launches a simple HTTP server serving the web app
- `public/`: Contains all front-end files
  - `index.html`: Main entry point for the app
  - `js/flashcard-data.js`: Flashcard data
  - `js/flashcard-logic.js`: Flashcard logic and interactivity
  - `css/style.css`: Main app styling
  - `css/flashcard-study.css`: Study mode styling
- `nginx.conf`: Configuration file for Nginx deployment
- `Dockerfile`: Docker configuration for containerized deployment
- `docker-compose.yml`: Docker Compose configuration for easy deployment

## Usage
- Use the flashcards to practice Portuguese vocabulary
- Filter cards by category (verbs, nouns, etc.) or difficulty level
- Click on any card to enter study mode with flip functionality
- Use keyboard shortcuts in study mode:
  - Space/Enter/Up/Down arrows: Flip card
  - Left/Right arrows: Navigate between cards
  - Esc: Exit study mode

## Customization
- To add or modify flashcards, edit `public/js/flashcard-data.js`
- For styling changes, edit `public/css/style.css` or `public/css/flashcard-study.css`
- To add new HTML pages, place them in the `public/` directory

## Deployment on TrueNAS SCALE with Nginx

### Option 1: Using Docker and TrueNAS Apps

1. **Build and push the Docker image:**
   ```bash
   docker build -t yourusername/lingua-card:latest .
   docker push yourusername/lingua-card:latest
   ```

2. **In TrueNAS SCALE:**
   - Go to Apps > Available Applications
   - Click "Custom App"
   - Create a new app with the following settings:
     - Application Name: lingua-card
     - Image Repository: yourusername/lingua-card
     - Image Tag: latest
     - Port Forwarding: Host Port 8080, Container Port 80

### Option 2: Using TrueNAS SCALE Kubernetes

1. **Create a deployment YAML file:**
   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: lingua-card
   spec:
     replicas: 1
     selector:
       matchLabels:
         app: lingua-card
     template:
       metadata:
         labels:
           app: lingua-card
       spec:
         containers:
         - name: lingua-card
           image: nginx:alpine
           ports:
           - containerPort: 80
           volumeMounts:
           - name: nginx-config
             mountPath: /etc/nginx/conf.d/default.conf
             subPath: nginx.conf
           - name: app-files
             mountPath: /usr/share/nginx/html
         volumes:
         - name: nginx-config
           configMap:
             name: lingua-card-config
         - name: app-files
           persistentVolumeClaim:
             claimName: lingua-card-pvc
   ```

2. **Apply the configuration in TrueNAS SCALE Kubernetes**

### Option 3: Direct Nginx Installation

1. **Create a Dataset in TrueNAS for the app files**

2. **Copy the contents of the `public/` directory to the dataset**

3. **Install and configure Nginx:**
   - Install the Nginx app from the TrueNAS catalog
   - Mount the dataset to the Nginx container
   - Use the provided `nginx.conf` as a configuration template

## Troubleshooting
- If you can't access the app locally, make sure the server is running and you are visiting the correct URL (`http://localhost:8000`)
- For TrueNAS deployment issues, check the container logs in the TrueNAS UI
- Ensure the correct ports are forwarded in your network configuration

## License
This project is licensed under the MIT License - see the LICENSE file for details.
