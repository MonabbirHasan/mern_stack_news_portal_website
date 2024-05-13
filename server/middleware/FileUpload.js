const multer = require("multer");
const path = require("path");
class FileUpload {
  static upload_img(directory) {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const fullPath = path.join(
          __dirname,
          "..",
          "..",
          "public",
          "uploads",
          "client_img"
        );
        cb(null, fullPath);
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
        console.log(file);
      },
    });
    const upload = multer({ storage: storage });
    return upload;
  }
}
export default FileUpload;