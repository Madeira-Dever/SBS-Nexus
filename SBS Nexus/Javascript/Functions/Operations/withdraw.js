import { showToast } from "../toast.js";
import { addHistory } from "./history.js";
export function withdrawSize() {
  const withdrawInput = document.getElementById("withdrawInput");
  const balanceValue = document.getElementById("balanceValue");

  const value = Number(withdrawInput.value);

  const currentBalance = Number(
    balanceValue.textContent.replace("R$", "").replace(",", ".").trim(),
  );

  if (withdrawInput.value < 1) {
    showToast({ message: "Saque Inválido", type: "error" });
    return;
  }

  if (currentBalance < withdrawInput.value) {
    showToast({ message: "Saque Inválido, Quer Dever?", type: "warning" });
    return;
  }

  const newValue = currentBalance - value;
  balanceValue.textContent = `R$ ${newValue.toFixed(2).replace(".", ",")}`;

  addHistory("Saque", "Saque Realizado com Sucesso", value);

  withdrawInput.value = "";

  showToast({
    message: "Saque Realizado",
    type: "success"
  });
}