# Etapa 1: Builder
FROM node:alpine3.20 AS builder

WORKDIR /app

# Copiar o package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante da aplicação
COPY . .

# Construir a aplicação
RUN npm run build

# Etapa 2: Servir com Nginx
FROM nginx:stable-alpine

# Copiar os arquivos de build para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html/

# Copiar a configuração do Nginx
COPY ./config/nginx/nginx.conf /etc/nginx/nginx.conf

# Expor a porta 80
EXPOSE 80

# Rodar o Nginx em modo foreground
CMD ["nginx", "-g", "daemon off;"]
