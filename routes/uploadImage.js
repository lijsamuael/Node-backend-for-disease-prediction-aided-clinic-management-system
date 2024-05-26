const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads"); // Relative path from the root folder
  },
  filename: (req, file, callback) => {
    const ext = file.originalname.split(".").pop();
    callback(null, `image-${Date.now()}.${ext}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Only PDF, JPEG, and PNG files are allowed"));
  }
};

const upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
});

router.use("/uploads", express.static(path.join(__dirname, "uploads")));


router.post("/", upload.single("image"), (req, res) => {
  console.log("I have been called");
  console.log(req.file); // Access the uploaded file using req.file
  res.json(req.file);
  res.status(200).send("File uploaded successfully");
});


module.exports = router;
