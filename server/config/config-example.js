const config = {
    development: {
        database: {
            url: 'mongodb://localhost/database',
            username: 'mohamedsobhy',
            password: 'abc123456',
        },
        google: {
            clientId: '',
            secret: '',
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
