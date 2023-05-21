import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hi, This is Udemy Server! ");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
