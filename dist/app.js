"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("node:http");
const port = Number(process.env.PORT ?? 3000);
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Hello from the serverless app!\n");
});
server.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map