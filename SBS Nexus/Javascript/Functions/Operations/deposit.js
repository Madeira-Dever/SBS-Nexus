import { showToast } from "../toast.js";
import { addHistory } from "./history.js";

export function depositSize() {
  const depositInput = document.getElementById("depositInput");
  const balanceValue = document.getElementById("balanceValue");

  const value = Number(depositInput.value);

  if (value < 1) {
    showToast({ message: "Depósito Inválido", type: "error" });
    return;
  }

  const currentBalance = Number(
    balanceValue.textContent.replace("R$", "").replace(",", ".").trim(),
  );

  const newBalance = currentBalance + value;

  balanceValue.textContent = `R$ ${newBalance.toFixed(2).replace(".", ",")}`;

  addHistory("Depósito", "Depósito Realizado com Sucesso", value);

  depositInput.value = "";
  
  showToast({
    message: "Depósito Realizado",
    type: "success"
  });
}