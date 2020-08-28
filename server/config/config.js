const config = {
    development: {
        database: {
            url: 'mongodb://localhost/cvbuddy',
            username: 'mohamedsobhy',
            password: 'abc123456',
        },
        google: {
            clientId:
                '368645689899-ka9v1p4ci6e79b64n2vkkb5tkn10uleg.apps.googleusercontent.com',
            secret: 'ZocdNF_9jTx5RxpWM9yyj_8S',
        },
        passport: {
            secret: 'perfect123Res456Cv',
            TOKEN_ISS: 'MidoisHere',
        },
    },
    production: {
        url: 'http://my.site.com',
        username: 'mohamedsobhy',
        password: 'hamokha',
    },
    jwt: {
        secret: 'jwtsecret',
    },
}
module.exports = config
