const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const subMemberRouter = require('./routes/subMemberRouter')
const subMoviesrRouter = require('./routes/subMoviesRouter')
const subSubscriptionsrRouter = require('./routes/subSubscriptionsRouter')
const userRouter = require('./routes/userRouter')
const userJsonRouter = require('./routes/userJsonRouter');
const permissionsJsonRouter = require('./routes/permissionsJsonRouter');

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/subMemberRouter', subMemberRouter);
app.use('/api/subMoviesrRouter', subMoviesrRouter);
app.use('/api/subSubscriptionsrRouter', subSubscriptionsrRouter);
app.use('/api/user', userRouter);
app.use('/api/userjson', userJsonRouter);
app.use('/api/permissionsjson', permissionsJsonRouter);


app.listen(5000, () => console.log("App runs on port 5000"));



