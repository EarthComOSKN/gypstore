import * as aws from "aws-sdk";

const s3 = new aws.S3({
  accessKeyId: "AKIA32WZISR6QCIRYDEB",
  secretAccessKey: "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",
  region: "ap-southeast-1"
});

export default class S3Service {
  static async uploadImage(profileImageBase64, profileImageName) {
    try {
      const buf = Buffer.from(profileImageBase64, "base64");
      const key = "image-";
      const modifiedKey = key.replace("/", "");
      const params = {
        Bucket: "gypstore",
        Key: `${modifiedKey + profileImageName}`,
        Body: buf
      };
      s3.upload(params, function(err, res) {
        if (err) {
          throw err;
        }
        // TODO: tracker
        console.log(`File uploaded successfully. ${res.Location}`);
      });
      const url = s3.getSignedUrl("getObject", {
        Bucket: "gypstore",
        Key: `${modifiedKey + profileImageName}`
      });
      return url;
    } catch (error) {
      // TODO: tracker
      console.log("=========S3 Err=========");
      console.log(error);
      console.log("========================");
      throw new Error(`ไม่สามารถอัพโหลดรูปภาพ`);
    }
  }
}
