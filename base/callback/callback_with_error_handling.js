sendEmail = (recepient, callback) => {
  console.log(`Recepient :${recepient}`);

  setTimeout(() => {
    const value = Math.random() > 30;
    if (value) {
      callback("Success", null);
    } else {
      callback(null, "Failed");
    }
  }, 3000);
};

emailStatus = (status, error) => {
  console.log(`Email status: ${status ?? error}`);
};

sendEmail("aruljothy.s8@gmail.com", emailStatus);
