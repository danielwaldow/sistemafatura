import * as dotenv from 'dotenv';
dotenv.config();
import {createReadStream, createWriteStream} from 'fs';

import { S3, S3ClientConfig } from '@aws-sdk/client-s3';
import { Upload } from "@aws-sdk/lib-storage";
import * as path from 'path';

export const s3ClientConfig: S3ClientConfig = {
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
};

console.log("s3ClientConfig: ", s3ClientConfig);

export const bucketName = process.env.AWS_BUCKET_NAME || '';
const s3client: S3 = new S3(s3ClientConfig);

async function uploadFile(filename: string, key?: string) {
  const fileStream = createReadStream(filename);

  const upload = new Upload({
    client: s3client,
    params: {
      Bucket: bucketName,
      Key: key || path.basename(filename),
      Body: fileStream,
    },
  });
  
  await upload
    .on('httpUploadProgress', (progress) => {
      // console.log("Upload progresso: ", progress);
    })
    .done(); // ou só: upload.done();
}


const filename = '/home/maikon/Dropbox/books/9781801074452-AWS_CERTIFIED_DEVOPS_ENGINEER_PROFESSIONAL_CERTIFICATION_AND_BEYOND.pdf';
uploadFile(filename)
  .then(() => {
    console.log("Upload finalizado!");
  })
  .catch((err) => {
    console.error("Erro ao fazer upload do arquivo: ", err);
  });
