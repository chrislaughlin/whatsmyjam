const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 3000));

try {
    fs.statSync('dist');
    console.log('Serving static build from dist/');
    console.log('Run `npm run clean` to return to development mode');
    app.use('/', express.static(path.join(__dirname, 'dist')));
}
catch (e) {
    console.log('Serving development build with nwb middleware');
    console.log('Run `npm run build` to create a production build');
    app.use(require('nwb/express')(express))
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Disable caching so we'll always get the latest data.
    res.setHeader('Cache-Control', 'no-cache');
    next()
});

app.get('/api/jam', function(req, res) {
    //TODO: use real API
    res.json({
        track: 'Point Breeze',
        album: 'Fast Forward',
        albumArtUrl: 'https://i.scdn.co/image/b78e0a4fae59bb0d37916137abb53c2f5b08eaea',
        link: 'https://api.spotify.com/v1/tracks/592TnriYiamsU1kUHlfG7y',
        artist: 'El Ten Eleven'
    });
});

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/')
});