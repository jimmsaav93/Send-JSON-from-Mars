
import { createServer } from 'node:http';
const server = createServer((request, response) => {
    console.log("request received");
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const responseBody = { location: "Mars" };
    const responseBodyString = JSON.stringify(responseBody);
    response.setHeader('Content-Length', Buffer.byteLength(responseBodyString));

    response.end(responseBodyString);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});