FROM oven/bun

WORKDIR /app

COPY package.json .

RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "src/index.ts"]