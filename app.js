console.log("This is the APP");
const express = require("express");
//routes will be imported herehere
const eventRoutes = require("./api/events/events.routers");

const connectDB = require("./database/connection");
const app = express();
app.use(express.json());
app.use("/api/events", eventRoutes);
// routes will be used here

connectDB();
const PORT = 8009;
app.listen(PORT, () => {
  console.log("The server is up on: ", PORT);
});
