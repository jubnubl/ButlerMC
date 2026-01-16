import HTTP from "node:http";

const PORT = process.env.PORT || 3000; // ✅ fix the port

const server = HTTP.createServer((request, response) => {
  response.writeHead(200, {
    "Access-Control-Allow-Origin": "*", // allow all origins
    "Access-Control-Allow-Methods": "GET, PING, OPTIONS",
    "Content-Type": "text/html"
  });
  response.end("<h3>ButlerMC is alive!</h3>");
});

export default (): void => {
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};
