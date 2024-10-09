const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "data", "cities.json")); // Correct path
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8080, () => {
  console.log("JSON Server is running");
});
