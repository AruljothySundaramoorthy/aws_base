class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("Custom failure");
} catch (e) {
  if (e instanceof CustomError) {
    console.error("Handled custom error:", e.message);
  }
}
