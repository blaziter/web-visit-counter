const fs = require('fs');
const _ = 'lodash';

fs.writeFile('visits.json', '{}', (err) => {
    if (err) throw err;
});

fs.readFile('visits.json', (err, data) => {
    data ? console.log(data) : console.log(err);
});