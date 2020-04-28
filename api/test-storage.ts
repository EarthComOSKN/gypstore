import { storageService } from "./storageService";
const fs = require("fs");

const input = fs.readFileSync("./Nutchanon's Cover Letter.pdf", "utf8");
console.log(input);

const uploadFile = async () => {
  await storageService.upload("test.pdf", input, {
    contentType: "application/pdf",
  });
};

uploadFile();

// const downloadFile = async () => {
//   const res = await storageService.download(
//     "Screen Shot 2563-04-21 at 17.08.40.png"
//   );
//   console.log(res);
// };

// downloadFile();
