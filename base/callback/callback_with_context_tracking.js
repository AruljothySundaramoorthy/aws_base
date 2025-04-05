sendEmail = (recepient, callback) => {
  console.log(`Recepient name : ${recepient}`);
  const starttime = new Date();

  setTimeout(() => {
    const endTime = new Date();
    callback({
      recepientname: recepient,
      status: "success",
      timeTaken: (endTime - starttime) / 1000,
    });
  }, 2000);
};

emailStatus = (data) => {
  console.log(data);
};

sendEmail("arul@gmail.com", emailStatus);
