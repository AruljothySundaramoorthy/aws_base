function uploadFile(filename, callback) {
  console.log(`Uploaded file ${filename}`);
  setTimeout(() => {
    callback(filename);
  }, 2000);
}

uploadFile("Arul.pdf", function (uploadSuccess) {
  console.log(uploadSuccess);
});
