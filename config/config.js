
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      postmarkKey: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
  development: {
    db: 'mongodb://bill:bill@ds029257.mongolab.com:29257/restaurantapp2',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'ngFantasyFootball - Development'
    }
  },
  test: {
    db: 'mongodb://bill:bill@ds029257.mongolab.com:29257/restaurantapp2',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'ngFantasyFootball - Test'
    }
  },
  production: {
    db: 'mongodb://bill:bill@ds029257.mongolab.com:29257/restaurantapp2',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'ngFantasyFootball - Production'
    }
  }
}
