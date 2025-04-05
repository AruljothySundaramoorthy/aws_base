function callbackWithInline(emailrecepient, successcallback, failurecallback) {
  console.log(`Recepient: ${emailrecepient}`);

  setTimeout(() => {
    const success = Math.random() > 2;
    if (success) {
      successcallback("Email sent");
    } else {
      failurecallback("Email not sent");
    }
  }, 2000);
}

callbackWithInline(
  "aruljothy.s8@gmail.com",
  (success) => console.log(`Status: ${success}`),
  (failure) => console.log(`Status:${failure}`)
);
