import { showToast } from "../toast.js";
export function addHistory(type, description, value) {
  const storage = localStorage.getItem("userData")
    ? localStorage
    : sessionStorage;

  const users = JSON.parse(storage.getItem("userData")) || [];

  const currentUser =
    JSON.parse(sessionStorage.getItem("currentUser")) ||
    JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    showToast({ message: "Usuário Atual não Encontrado", type: "warning" });
    return;
  }

  const user = users.find((u) => u.email === currentUser.email);
  if (!user) {
    showToast({ message: "Usuário não Encontrado", type: "warning" });
    return;
  }

  if (!user.history) {
    user.history = [];
  }

  user.history.unshift({
    type,
    description,
    value,
    date: new Date().toLocaleString("pt-BR"),
  });

  storage.setItem("userData", JSON.stringify(users));
}

export function loadHistory() {
  const storage = localStorage.getItem("userData")
    ? localStorage
    : sessionStorage;

  const users = JSON.parse(storage.getItem("userData")) || [];
  
  const currentUser =
    JSON.parse(sessionStorage.getItem("currentUser")) ||
    JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    showToast({ message: "Usuário Atual não Encontrado", type: "warning" });
    return;
  }

  const user = users.find((u) => u.email === currentUser.email);
  if (!user) {
    showToast({ message: "Usuário não Encontrado", type: "warning" });
    return;
  }

  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = "";

  if (!user.history || user.history.length === 0) {
    transactionList.innerHTML = "<li>Nenhuma movimentação.</li>";
    return;
  }

  user.history.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.type}</strong><br>
      ${item.description}<br>
      Valor: R$ ${Number(item.value).toFixed(2).replace(".", ",")}<br>
      <small>${item.date}</small>
    `;

    transactionList.appendChild(li);
  });
}