import S3FileUpload from "react-s3";
import ReactS3 from "react-s3";
import React from "react";
import { uploadFile } from "react-s3";
import ReactDom from "react-dom";

const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  region: "ap-southeast-2",
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_KEY
};

class ImageUpload extends React.Component {
  upload = event => {
    const {
      input: { onChange }
    } = this.props;
    uploadFile(event.target.files[0], config)
      .then(data => {
        console.log(data.location);
        onChange(data.location);
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    console.log(this.props);
    return <input type="file" onChange={this.upload} />;
  }
}

export default ImageUpload;
