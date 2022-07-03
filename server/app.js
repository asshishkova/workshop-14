const express = require("express");
const path = require('path');
const movieRouter = require('./router/moviesRouter');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: "Healthy"
    });
});

app.use('/movies', movieRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
