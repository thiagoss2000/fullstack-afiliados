FROM node:16

WORKDIR /usr/src/

COPY . .

RUN npm i && npm run build 
# && npx prisma generate

EXPOSE 4000

CMD [ "npm", "start" ]