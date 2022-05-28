const express = require('express');
const fs = require('fs');
const _ = require('lodash');
const app = express();
const PORT = 3000;

exports.writeFile = (visit) => {
    fs.writeFile('visits.json', visit, (err) => {
        if (err) throw err;
    });
}

fs.readFile('visits.json', (err, data) => {
    data ? console.log(data) : console.log(err);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));