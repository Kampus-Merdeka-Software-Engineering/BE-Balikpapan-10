const express = require("express");

const app = express();
const authRoutes = require("./routes/auth");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

app.listen(4000, () => {
  console.log("server berhasil running");
});
