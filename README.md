# Image Bucket Manager In Node JS
This project was made for a reason. You can make a mini AWS S3 Bucket like image server by own.
## Setting Up
Clone from github, run *"npm install"*, edit **settings.js** according to your setup.
## APIs
# /api/bucket/create - POST METHOD
**Post Params**
bucket - *string*
# /api/bucket/albums/:bucket - GET METHOD
**Get Params**
bucket - *string*
# /api/bucket/album/create - POST METHOD
**Post Params**
bucket - *string*
album - *string*
# /api/album/images/:bucket/:album - GET METHOD
**Get Params**
bucket - *string*
album - *string*
# /upload/image/base64 - POST METHOD
**Post Params**
bucket - *string*
album - *string*
image - *base64 string*
