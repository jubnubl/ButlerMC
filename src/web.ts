import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Root route (optional)
app.get("/", (_req, res) => {
	res.send("<h3>ButlerMC is alive!</h3>");
});

// Health route for cron-job.org
app.get("/health", (_req, res) => {
	res.status(200).send("OK");
});

// Start server
export default (): void => {
	app.listen(PORT, "0.0.0.0", () => {
		console.log(`Web server running on port ${PORT}`);
	});
};
