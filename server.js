import express from "express";
const app = express();

// Our fake database for now: a plain array that lives in memory
const listings = [
 { id: 1, title: "Nile View Apartment", pricePerNight: 85 },
 { id: 2, title: "Beach House", pricePerNight: 140 },
 { id: 3, title: "Desert Eco-Lodge", pricePerNight: 60 },
];

app.get("/", (req, res) => {
 res.send("Hello world");
});
app.listen(3000, () => {
 console.log("Server running on http://localhost:3000");
});