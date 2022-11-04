const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const client = new S3Client({ region: "ap-south-1" });

function fetchPreSignedUrl(key, expiresInSeconds) {
  const command = new GetObjectCommand({ Key: key, Bucket: "pft-netflix" });
  return getSignedUrl(client, command, { expiresIn: expiresInSeconds });
}

module.exports = {
  fetchPreSignedUrl,
};
