function generateImage() {
  const userInput = document.getElementById("userInput");
  const qrImage = document.getElementById("qrImage");
  const inputValue = userInput.value;

  if (inputValue.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputValue;
  } else {
    userInput.classList.add("border-red-600");

    setTimeout(() => {
      userInput.classList.remove("border-red-600");
    }, 300);
  }
}
