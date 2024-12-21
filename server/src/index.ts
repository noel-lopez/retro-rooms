import express from "express";

const app = express();

// TODO: health check

const five = 5;
if (5 == five) {
  console.log("Eslint test");
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
