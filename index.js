const express = require('express');
const app = express()

const path = require('path');

const {videos, user} = require('./fake_data')

app.use(express.json())

app.get('/api/user/1', (req,res) => {
    setTimeout( () => {
        res.json(user)

    }, 3000)
})

app.get("/api/video/1", (req, res) => {
    setTimeout( () => {
        res.json(videos);
    }, 5000)
})


app.use(express.static(path.join(__dirname, "./youtube-copy/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./youtube-copy/build", "index.html"));
});



const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
    console.log(`Serving server on ${PORT}`)
})