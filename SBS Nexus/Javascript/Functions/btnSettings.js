export function thisMenuBtn(btn) {
  function hideOperations() {
    const boxes = document.querySelectorAll(
      ".depositBox, .withdrawBox, .transferBox, .operationBox, .balanceBox",
    );
    boxes.forEach((box) => {
      box.style.display = "none";
    });

    const welcomeScreen = document.getElementById("welcomeScreen");
    if (welcomeScreen) {
      welcomeScreen.style.display = "none";
    }
  }

  btn.addEventListener("click", () => {
    const menuBtn = document.querySelectorAll(".menuButton");
    menuBtn.forEach((button) => {
      button.classList.remove("active");
    });

    btn.classList.add("active");
    hideOperations();

    switch (btn.id) {
      case "home": {
        const welcomeScreen = document.getElementById("welcomeScreen");
        if (welcomeScreen) {
          welcomeScreen.style.display = "block";
        }
        break;
      }

      case "deposit": {
        const depositBox = document.getElementById("depositBox");
        depositBox.style.display = "block";
        break;
      }

      case "withdraw": {
        const withdrawBox = document.getElementById("withdrawBox");
        withdrawBox.style.display = "block";
        break;
      }

      case "transfer": {
        const transferBox = document.getElementById("transferBox");
        transferBox.style.display = "block";
        break;
      }

      case "history": {
        const historyBox = document.getElementById("historyBox");
        historyBox.style.display = "block";
        break;
      }
    }
  });
}