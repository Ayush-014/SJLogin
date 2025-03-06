const express = require("express");
const mainRouter = require("./routes/index");
const userRouter = require("./routes/user");
const app = express();


app.use('/api/v1', mainRouter);
app.use('/api/v1/users', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));