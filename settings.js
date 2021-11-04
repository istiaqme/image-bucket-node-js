const path = require('path');
const BaseDirectory = __dirname;
const StaticDir = path.join(BaseDirectory, '/static'); // Static Directory In Which The Images Will Be Saved
const SERVER_SETTINGS = {
    APP_TITLE : 'Image Bucket', // Just A Name
    APP_ROOT : 'http://localhost', // Express Server Root
    PORT : 5000, // Express Server Port
    WEB_URL : 'http://localhost:5000', // In Production Your Proxy URL eg. https://bucket.example.com
    BUCKET_FOLDER_IN_URL : 'images' // Sub directory to be shown in url eg. https://bucket.example.com/images
}




module.exports = {
    BaseDirectory : BaseDirectory,
    StaticDir : StaticDir,
    SERVER_SETTINGS : SERVER_SETTINGS
}