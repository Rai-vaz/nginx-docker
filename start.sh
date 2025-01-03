echo -e "\e[44;93mcriando a imagem da aplicação"

#Cria a imagem e sobe o container
docker-compose up --build -d

echo "Pronto!"
