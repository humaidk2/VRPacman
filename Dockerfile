FROM node:7.5.0

# Create a new folder for our application
RUN mkdir -p /usr/src/app

# Set the working dir when our container executes
WORKDIR /usr/src/app

# Copy our package.json file
ADD package.json /usr/src/app

# Install our packages
RUN npm install

# Copy the rest of our application
COPY . /usr/src/app

#Expose our application port
EXPOSE 3000

# Set start command
CMD ["node", "server.js"]
