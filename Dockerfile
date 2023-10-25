# Node.js como base
FROM node:14

# contêiner
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Cópia da fonte do app p/ o contêiner
COPY . .

# porta em que o app irá rodar
EXPOSE 3000

# Iniciar app
CMD ["npm", "start"]
