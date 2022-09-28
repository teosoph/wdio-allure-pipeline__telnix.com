FROM teosophh/wdio-allure-telnyx
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install
COPY . /app
CMD npm run test:chrome:headless