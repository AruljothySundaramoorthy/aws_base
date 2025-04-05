function SendEmailProise(recepient) {
  return new Promise((resolve, reject) => {
    const status = Math.random() > 0.2;
    if (status) {
      resolve(`Success when sent to ${recepient}`);
    } else {
      reject(`Failure when sent to ${recepient}`);
    }
  });
}

SendEmailProise("arul@gmail.com")
  .then((success) => {
    console.log(`Status : ${success}`);
  })
  .catch((error) => {
    console.log(`Status : ${error}`);
  });
