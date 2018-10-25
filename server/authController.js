const axios = require('axios');
module.exports = {
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).json({message: 'Sucessfully logged out'});
    },

    handleCallback: (req, res) => {
        exchangeCodeForAccessToken()
            .then(exchangeAccessTokenForUserInfo)
            .then(storeUserInfoInDatabase)
            .catch(error => {
                console.error('A problem occurred in handleCallback', error);
                res.status(500).send('An unexpected error happened on the server');
            })

        function exchangeCodeForAccessToken() {
            const payload = {
                client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
                client_secret: process.env.AUTH0_CLIENT_SECRET,
                code: req.query.code,
                grant_type: 'authorization_code',
                redirect_uri: `http://${req.headers.host}/auth/callback`
            };

            return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload)
        }

        function exchangeAccessTokenForUserInfo(accessTokenResponse) {
            const accessToken = accessTokenResponse.data.access_token;
            return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`)
        }
    }
};