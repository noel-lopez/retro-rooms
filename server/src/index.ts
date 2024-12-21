import express from "express";

const app = express();

app.get("/health", (_req, res) => {
  res.status(200).send({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
