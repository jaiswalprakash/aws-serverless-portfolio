const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const {S3}  = require('../utility/config')

const s3Client = new S3Client({
    region : 'ap-south-1',
    credentials:{
        accessKeyId: S3.accessKeyId,
        secretAccessKey: S3.secretAccessKey
    }
});

const getObjectURL = async(bucket,key) =>{
    const command = new GetObjectCommand({
        Bucket: bucket,
        Key : key
    });
    const url = await getSignedUrl(s3Client,command,{expiresIn:20});
    return url ;
}


async function init (){
    console.log('URL',await getObjectURL('prakash.jaiswal625','IMG_20221217_160930.jpg'))
}
  
init();

module.exports = {getObjectURL}