import React from "react";
import ReactDom from "react-dom";
import S3, { uploadFile } from "aws-s3";

const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  region: "ap-southeast-2",
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_KEY
};

/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

/* This is optional */
const newFileName =
  "RI" +
  toString(
    Math.floor(Math.random() * 100) +
      7 +
      "" +
      new Date().getTime() +
      Math.floor(Math.random() * 100) +
      1 +
      Math.random()
        .toString(36)
        .replace(/[^a-zA-Z]+/g, "")
        .substr(0, 5)
  );

class ImageUpload extends React.Component {
  constructor() {
    this.S3Client = new S3(config);
  }
  S3Client(event) {
    uploadFile(event.target.files[0], newFileName)
      .then(data => {
        console.log(data.location);
      })
      .catch(err => {
        alert(err);
      });
  }
  render() {
    return (
      <>
        <h3>Image upload test</h3>
        <input type="file" onChange={this.upload} />
      </>
    );
  }
}

export default ImageUpload;
