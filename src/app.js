const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App'
    })
})

app.get("*", (req,res) => {
    res.send("page not found");
});

app.listen(port, () => {
    console.log("server is running on port ",port);
});