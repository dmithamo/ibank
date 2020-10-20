# base image
FROM node:12.9.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@10.1.7

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0