function downloadFile(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance to succeed

      if (success) {
        resolve(`✅ File downloaded from ${url}`);
      } else {
        reject(`❌ Failed to download from ${url}`);
      }
    }, 2000);
  });
}

function downloadWithRetry(url, retries = 3) {
  return downloadFile(url)
    .then((msg) => {
      console.log(msg);
    })
    .catch((err) => {
      console.warn(err);
      if (retries > 0) {
        console.log(`🔁 Retrying... (${retries} retries left)`);
        return downloadWithRetry(url, retries - 1);
      } else {
        console.error("🚫 All retries failed.");
      }
    });
}

// Call the function
downloadWithRetry("https://example.com/file.zip");
