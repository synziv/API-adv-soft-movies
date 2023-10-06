FROM oven/bun

WORKDIR /app

COPY package.json .

RUN bun install

COPY . .

RUN bun test

EXPOSE 4000

CMD ["bun", "src/index.ts"]