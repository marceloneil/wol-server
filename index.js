const config = require('./config.json');
const express = require('express');
const wol = require('wol');

const app = express();

app.use(express.static('public'));

app.get('/wake', (req, res) => {
    wol.wake(config.mac, (err, out) => {
        if (err) {
            console.error(err);
            res.send(err);
        } else {
            console.log('Waking ' + config.mac + '...');
            res.redirect(config.hostname);
        }
    });
});

app.listen(config.port, () => {
    console.log('WOL server listening on port ' + config.port + '!');
});
