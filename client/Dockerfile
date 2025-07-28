FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm install -g serve
EXPOSE 9778
CMD ["serve", "-s", "dist", "-l", "9778"]