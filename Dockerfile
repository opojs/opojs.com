# Automatic building for master and staging branch

# Use latest (long term support) version of node
FROM node:boron

# Define Environment Variables
ENV PORT 8000
ENV HOSTNAME 0.0.0.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install pm2 -g

# Bundle app source
COPY . /usr/src/app

# Build project
RUN npm run build:prod

# Expose Port and commands
EXPOSE $PORT
CMD [ "npm", "run", "pm2" ]
