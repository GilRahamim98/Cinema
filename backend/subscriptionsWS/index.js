const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const subRouter = require('./routes/subRouter');
const movieRouter = require('./routes/movieRouter');
const memberRouter = require('./routes/memberRouter');

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/subscriptions', subRouter);
app.use('/api/movies', movieRouter);
app.use('/api/members', memberRouter);

app.listen(9000, () => console.log("App runs on port 9000"));
