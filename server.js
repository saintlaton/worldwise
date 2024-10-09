import jsonServer from "json-server";
import { join } from "path"; // import path join
import { fileURLToPath } from "url";
import { dirname } from "path";

// Helper to resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "data", "cities.json")); // Correct path
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8080, () => {
  console.log("JSON Server is running");
});
