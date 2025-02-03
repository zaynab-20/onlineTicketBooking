const express = require('express');
const PORT = 8080;

const router = require('./routers/usersRouter');
const eventRouter =require("./routers/eventsRouter");
const seatRouter = require("./routers/seatRouter");
const bookingRouter =require("./routers/bookingRouter")

const app = express();

app.use(express.json())

app.use(router)

app.use(eventRouter)
// app.use(seatRouter)
app.use(bookingRouter)

app.listen(PORT,()=>{
    console.log(`server is now running on port: ${PORT}`);
})