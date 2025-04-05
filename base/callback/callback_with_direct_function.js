sendEmail = (recepient, callback) => {
  console.log(`Recepient :${recepient}`);

  setTimeout(() => {
    callback("Email Sent");
  }, 3000);
};

emailStatus = (status) => {
  console.log(`Email status: ${status}`);
};

sendEmail("aruljothy.s8@gmail.com", emailStatus);
