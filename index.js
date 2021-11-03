const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const settings = require('./settings');

// works at first time run
!fs.existsSync(settings.StaticDir) ? fs.mkdirSync(settings.StaticDir) : '';


app.use(`/${settings.SERVER_SETTINGS.BUCKET_FOLDER_IN_URL}`, express.static(settings.StaticDir));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({
  extended: true,
  limit: '50mb'
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// api route
app.use('/api', require('./controller').router);

app.listen(settings.SERVER_SETTINGS.PORT, () => {
    console.log(`${settings.SERVER_SETTINGS.APP_TITLE} is listening at port ${settings.SERVER_SETTINGS.PORT}.`);
    console.log(`Root URL Is : ${settings.SERVER_SETTINGS.APP_ROOT}:${settings.SERVER_SETTINGS.PORT}`);
})