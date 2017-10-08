const spotifyAccess = require('./config/spotify');
const axios = require('axios');
const base64 = require('base-64');
const querystring = require('querystring');

module.exports = {
    getJam: () => {
        const auth = 'Basic ' + new Buffer(spotifyAccess.client_id + ':' + spotifyAccess.client_secret).toString('base64');
        return axios.post(
            'https://accounts.spotify.com/api/token',
            querystring.stringify({
                grant_type: 'client_credentials'
            }),
            {
                headers: {
                    "authorization": auth,
                    "content-type": "application/x-www-form-urlencoded"
                }
            }
        )
            .then(response => {
                axios.get(
                    'https://api.spotify.com/v1/me/player/currently-playing',
                    {
                        headers: {
                            "authorization": `Bearer ${response.data.access_token}`,
                        }
                    }
                ).then(response => {
                    res.json(response);
                }).catch(err => {
                    console.log(err);
                    res.status(500).send();
                });

            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    }
}