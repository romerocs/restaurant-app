'use strict'

const fs = require('fs')

const dotEnvExists = fs.existsSync('./server/.env');
if (dotEnvExists) {
  console.log('getEnv.js: .env exists, probably running on development environment')
  process.exit()
}

// On Google Cloud Platform authentication is handled for us
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

const bucketName = `envvarsrvarestaurantapp`
console.log(`Downloading .env from bucket "${bucketName}"`);
storage
  .bucket(bucketName)
  .file('.env')
  .download({ destination: './server/.env' })
  .then(() => {
    console.info('getEnv.js: .env downloaded successfully')
  })
  .catch(e => {
    console.error(`getEnv.js: There was an error: ${JSON.stringify(e, undefined, 2)}`)
  })