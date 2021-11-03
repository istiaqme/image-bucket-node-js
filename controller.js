const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const ba64 = require("ba64");
const settings = require('./settings');

function randomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


router.post('/bucket/create', async (req, res) => {
    try{
        let bucket = req.body.bucket;
        if(!fs.existsSync(path.join(settings.StaticDir, `/${bucket}`))){
            fs.mkdirSync(`${settings.StaticDir}/${bucket}`);
            res.status(200).send({
                type : 'success',
                msg : `Bucket - ${bucket} has been created successfully.`
            });
        }
        else{
            res.status(500).send({
                type : 'error',
                error : 'Bucket Exists!'
            });
        }
    }
    catch(error){
        res.status(500).send({
            type : 'error',
            error : error
        })
    }
})

router.get('/bucket/albums/:bucket', async (req, res) => {
    try{
        let bucket = req.params.bucket;
        if(fs.existsSync(path.join(settings.StaticDir, `/${bucket}`))){
            res.status(200).send({
                type : 'success',
                data : fs.readdirSync(path.join(settings.StaticDir, `/${bucket}`))
            });
        }
        else{
            res.status(500).send({
                type : 'error',
                error : 'Bucket Does Not Exist!'
            });
        }
    }
    catch(error){
        res.send({
            type : 'error',
            error : error
        })
    }

})

router.post('/bucket/album/create', async (req, res) => {
    try{
        let bucket = req.body.bucket;
        let album = req.body.album;
        if(!fs.existsSync(path.join(settings.StaticDir, `/${bucket}/${album}`))){
            fs.mkdirSync(`${settings.StaticDir}/${bucket}/${album}`);
            res.status(200).send({
                type : 'success',
                msg : `Album - ${album} has been created successfully in bucket - ${bucket}.`
            });
        }
        else{
            res.status(500).send({
                type : 'error',
                error : 'Album Exists!'
            });
        }
    }
    catch(error){
        res.send({
            type : 'error',
            error : error
        })
    }

})

router.get('/album/images/:bucket/:album', async (req, res) => {
    try{
        let bucket = req.params.bucket;
        let album = req.params.album;
        let finalDir = path.join(settings.StaticDir, `/${bucket}/${album}`);
        if(fs.existsSync(finalDir)){
            let images = [];
            let items = fs.readdirSync(finalDir);
            for(let i = 0; i < items.length; i++){
                let currentItem = items[i];
                let image = {
                    'serial' : i+1,
                    'fileName' : currentItem,
                    'url' : `${settings.SERVER_SETTINGS.WEB_URL}/${settings.SERVER_SETTINGS.BUCKET_FOLDER_IN_URL}/${bucket}/${album}/${currentItem}`,
                    'stats' : fs.statSync(path.join(finalDir, `/${currentItem}`))
                }
                images.push(image);
            }
            res.status(200).send({
                type : 'success',
                data : images
            });
        }
        else{
            res.status(500).send({
                type : 'error',
                error : 'Album Does Not Exist!'
            });
        }
    }
    catch(error){
        res.send({
            type : 'error',
            error : error
        })
    }

})

router.post('/upload/image/base64', async (req, res) => {
    try{
        let bucket = req.body.bucket;
        let album = req.body.album;
        let image = req.body.image;
        let dirToUpload = path.join(settings.StaticDir, `/${bucket}/${album}`);
        if(fs.existsSync(dirToUpload)){
            let timeNowMS = Date.now();
            let nameString = randomString(6);
            let newFileName = randomString(6) + timeNowMS + randomString(6);
            let saveImage = ba64.writeImageSync(path.join(dirToUpload, newFileName), image); // Saves myimage.jpeg.
            let extension = image.split(';')[0].split('/')[1];
            res.status(200).send({
                type : 'success',
                data : {
                    'imageName' : newFileName + '.' + extension,
                    'url' : `${settings.SERVER_SETTINGS.WEB_URL}/${settings.SERVER_SETTINGS.BUCKET_FOLDER_IN_URL}/${bucket}/${album}/${newFileName}.${extension}`,
                    'bucket' : bucket,
                    'album' : album
                }
            });
        }
        else{
            res.status(500).send({
                type : 'error',
                error : 'Album Does Not Exist!'
            });
        }
    }
    catch(error){
        res.send({
            type : 'error',
            error : error
        })
    }

})



module.exports.router = router;