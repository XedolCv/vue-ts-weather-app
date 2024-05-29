FROM node:18
WORKDIR /app

# copy 'package.json'
COPY package.json .
# install vite globally
RUN npm install -g vite
# copy all filtes
COPY . .
# install all deps
RUN yarn install


# vite default port
EXPOSE 8082
EXPOSE 5173
CMD ["npm", "run", "dev"]

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf