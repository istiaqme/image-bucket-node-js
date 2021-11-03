# Image Bucket Manager In Node JS
This project was made for a reason. You can make a mini AWS S3 Bucket like image server by own. <br/>
**Base64 Version** <br/>
## Setting Up
Clone from github, run *"npm install"*, edit **settings.js** according to your setup.
```
const StaticDir = path.join(BaseDirectory, '/static');
const SERVER_SETTINGS = {
    APP_TITLE : 'Image Bucket',
    APP_ROOT : 'http://localhost',
    PORT : 5000,
    WEB_URL : 'http://localhost:5000',
    BUCKET_FOLDER_IN_URL : 'images'
}
```
## APIs
# /api/bucket/create - POST METHOD
**Post Params** <br/>
bucket - *string*
# /api/bucket/albums/:bucket - GET METHOD
**Get Params** <br/>
bucket - *string*
# /api/bucket/album/create - POST METHOD
**Post Params** <br/>
bucket - *string* <br/>
album - *string*
# /api/album/images/:bucket/:album - GET METHOD
**Get Params** <br/>
bucket - *string* <br/>
album - *string*
# /upload/image/base64 - POST METHOD
**Post Params** <br/>
bucket - *string* <br/>
album - *string* <br/>
image - *base64 string*
