# Image Bucket Manager In Node JS
This project was made for a reason. You can make a mini AWS S3 Bucket like image server on your own. <br/>
**Base64 Version** <br/>
## Setting Up
Clone from github, run *"npm install"*, edit **settings.js** according to your setup.
```javascript
const StaticDir = path.join(BaseDirectory, '/static'); // Static Directory In Which The Images Will Be Saved
const SERVER_SETTINGS = {
    APP_TITLE : 'Image Bucket', // Just A Name
    APP_ROOT : 'http://localhost', // Express Server Root
    PORT : 5000, // Express Server Port
    WEB_URL : 'http://localhost:5000', // In Production Your Proxy URL eg. https://bucket.example.com
    BUCKET_FOLDER_IN_URL : 'images' // Sub directory to be shown in url eg. https://bucket.example.com/images
}
```
## APIs
### /api/bucket/create - *POST*
**Post Params** <br/>
bucket - *string*
### /api/bucket/albums/:bucket - *GET*
**Get Params** <br/>
bucket - *string*
### /api/bucket/album/create - *POST*
**Post Params** <br/>
bucket - *string* <br/>
album - *string*
### /api/album/images/:bucket/:album - *GET*
**Get Params** <br/>
bucket - *string* <br/>
album - *string*
### api/upload/image/base64 - *POST*
**Post Params** <br/>
bucket - *string* <br/>
album - *string* <br/>
image - *base64 string*
## Supporters
<a href="https://infoniam.com"><img src="https://infoniam.com/assets/Infoniam-Logo.png" height="50" width="250" ></a> &nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://shodaimama.com"><img src="https://shodaimama.com/logo/logo.png" height="90" width="250" ></a>
<a href="https://arniam.com"><img src="https://arniam.com/assets/images/official/branding/arniam-logo-colored-mini.webp" height="90" width="250" ></a>
