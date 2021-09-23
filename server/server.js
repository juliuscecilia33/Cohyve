const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/jwtAuth"));

app.use("/clubs", require("./routes/clubs"));

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});