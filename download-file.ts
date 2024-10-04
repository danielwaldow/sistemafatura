import * as dotenv from 'dotenv';
dotenv.config();
import { createWriteStream} from 'fs';
import {  S3, S3ClientConfig } from '@aws-sdk/client-s3';
import { Readable } from 'stream';

export const s3ClientConfig: S3ClientConfig = {
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
};

export const bucketName = process.env.AWS_BUCKET_NAME || '';
const s3client: S3 = new S3(s3ClientConfig);

async function downloadFile(key: string, filename: string): Promise<void> {
  const writeFileStream = createWriteStream(filename);
  let res = await s3client.getObject({ Bucket: bucketName, Key: key})
  let readFileStream = res.Body;
  return new Promise((resolve, reject) => {
    if (readFileStream instanceof Readable) {
      readFileStream.pipe(writeFileStream);
      readFileStream.on('end', () => {
        resolve();
      });    
    } 
    else {
      reject("Erro ao fazer download do arquivo");
    }
  });
}


const key = '9781801074452-AWS_CERTIFIED_DEVOPS_ENGINEER_PROFESSIONAL_CERTIFICATION_AND_BEYOND.pdf';
downloadFile(key, '/home/maikon/Downloads/9781801074452-AWS_CERTIFIED_DEVOPS_ENGINEER_PROFESSIONAL_CERTIFICATION_AND_BEYOND.pdf')
  .then(() => {
    console.log("Download finalizado!");
  })
  .catch((err) => {
    console.error("Erro ao fazer download do arquivo: ", err);
  });
