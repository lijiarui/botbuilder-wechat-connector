var express   = require('express'),
    builder   = require('botbuilder'),
    connector = require('../WechatConnector');

// Create http server
var app    = express();

// Create wechat connector
var wechatConnector = new connector.WechatConnector({
    appID: "YOUR WECHAT APP ID",
    appSecret: "YOUR WECHAT APP SECRET",
    appToken: "YOUR WECHAT TOKEN"
});

var bot = new builder.UniversalBot(wechatConnector);

// Bot dialogs
// Todo..

app.use('/bot/wechat', wechatConnector.listen());

app.get('*', function(req, res) {
    res.send(200, 'Hello Wechat Bot');
});

// Start listen on port
app.listen(process.env.port || 9090, function() {
    console.log('server is running.');
});