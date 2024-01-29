const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const api_key = process.env.API_KEY;

app.use(express.static("public"));
app.use(express.json());

app.get("/dinoname", async (request, response) => {
  try {
    const fetchApi = await fetch(
      "https://dinoipsum.com/api/?format=json&paragraphs=1&words=2",
      { method: "GET" }
    );

    const dinoNameResponse = await fetchApi.json();
    console.log(dinoNameResponse);
    response.json(dinoNameResponse);
  } catch (error) {
    console.error("Error fetching dino name:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/dinoimage", async (request, response) => {
  try {
    const url =
      "https://google-search72.p.rapidapi.com/imagesearch?q=dinosaur&gl=us&lr=lang_en&num=20&start=0";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    };

    const fetchApi = await fetch(url, options);
    const dinoImageResponse = await fetchApi.json();
    console.log(dinoImageResponse);
    response.json(dinoImageResponse);
  } catch (error) {
    console.error("Error fetching dino image:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});