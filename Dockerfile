FROM node:18

WORKDIR /app

RUN npm install renovate

COPY index.js .
COPY renovate-config.js .

CMD ["node", "index.js"]
