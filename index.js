const http = require("http");


const handleAllRequests = () => {
    console.log("Hi, just received a request");
}
const server = http.createServer(handleAllRequests);

server.listen(3000, "127.0.0.1" ,() => console.log("Server is ready to accept a request"))