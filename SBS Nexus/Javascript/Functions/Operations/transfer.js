import { showToast } from "../toast.js";
import { addHistory } from "./history.js";
export function transferSize() {
  const targetAccount = document.getElementById("targetAccount");
  const transferValue = document.getElementById("transferInput");
  const balanceValue = document.getElementById("balanceValue");

  const currentBalance = Number(
    balanceValue.textContent.replace("R$", "").replace(",", ".").trim(),
  );

  const value = Number(transferValue.value);

  if (value < 1 || targetAccount.value.length < 6) {
    showToast({ message: "Transferência Inválida", type: "error" });
    return;
  }

  if (value > currentBalance) {
    showToast({ message: "Saldo Insuficiente", type: "warning" });
    return;
  }

  const newValue = currentBalance - value;
  balanceValue.textContent = `R$ ${newValue.toFixed(2).replace(".", ",")}`;

  addHistory("Transferência", `Transferência Realizada com Sucesso Para ${targetAccount.value}`, value);

  targetAccount.value = "";
  transferValue.value = "";

  showToast({
    message: "Transferência Realizada",
    type: "success"
  });
}