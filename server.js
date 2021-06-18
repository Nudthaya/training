//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static('./dist/src'));
app.use(express.static('public'));

app.get('/*', (req, res) =>
    // res.sendFile('index.html', {root: 'dist/src/'}),
    res.sendFile('index1.html', { root: path.join(__dirname, '../public') })
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);