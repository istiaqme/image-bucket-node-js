const path = require('path');
const BaseDirectory = __dirname;
const StaticDir = path.join(BaseDirectory, '/static');
const SERVER_SETTINGS = {
    APP_TITLE : 'Image Bucket',
    APP_ROOT : 'http://localhost',
    PORT : 5000,
    WEB_URL : 'http://localhost:5000',
    BUCKET_FOLDER_IN_URL : 'images'
}


module.exports = {
    BaseDirectory : BaseDirectory,
    StaticDir : StaticDir,
    SERVER_SETTINGS : SERVER_SETTINGS
}