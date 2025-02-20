FROM node:20-alpine
# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances en premier
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Exposer le port 3000 (React utilise ce port par défaut)
EXPOSE 3000

# Lancer le serveur React
CMD ["npm", "run", "dev"]