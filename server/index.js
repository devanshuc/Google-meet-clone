const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

app.use(cors());
const PORT = process.env.PORT || 5173;

app.get("/", (req, res) => {
	res.send("Server is running");
	console.log("Server running");
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
