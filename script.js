let pin = "";

function openModal() {
  document.getElementById("pinModal").style.display = "flex";
  resetPin();
}

function closeModal() {
  document.getElementById("pinModal").style.display = "none";
  resetPin();
}

function forgotPin() {
  alert("Redirect to PIN recovery flow...");
}

function press(num) {
  if (pin.length < 4) {
    pin += num;
    updateDots();
    if (pin.length === 4) {
      setTimeout(() => {
        alert("PIN entered: " + pin);
        closeModal();
      }, 200);
    }
  }
}

function backspace() {
  pin = pin.slice(0, -1);
  updateDots();
}

function resetPin() {
  pin = "";
  updateDots();
}

function updateDots() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("dot" + i).classList.remove("filled");
  }
  for (let i = 1; i <= pin.length; i++) {
    document.getElementById("dot" + i).classList.add("filled");
  }
}
