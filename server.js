const express = require('express');
const compression = require('compression')
const path = require('path');
const fs = require('fs');

const app = express();
app.use(compression());

const dist = path.join(__dirname, 'dist');
fs.readdir(dist, (err, files) => {
    if (err) throw err;
    files = files.map((e) => {return '/' + e});

    app.route('/*')
        .get([], (req, res) => {
            if (files.includes(req.originalUrl) || req.originalUrl === '/') {
                const file = path.join(__dirname, 'dist', req.originalUrl);
                res.status(200).sendFile(file);
            } else {
                res.status(404).send('Not Found');
            }
        });
});

app.listen(80)