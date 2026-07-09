import { nexusOverlay } from "../App/nexus.js";
import { showToast } from "./toast.js";
export function accountValidation() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const pass = document.getElementById("password");
  const check = document.getElementById("check");

  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
    pass: pass.value.trim(),
    balance: 0,
    history: []
  };

  if (!userData.name || !userData.email || !userData.pass) {
    showToast({ message: "Dados Incompletos", type: "error" });
    return;
  }

  if (!userData.email.includes("@gmail.com")) {
    showToast({ message: "E-mail inválido", type: "warning" });
    return;
  }

  if (userData.pass.length < 6) {
    showToast({ message: "Senha de mínimo 6 caracteres", type: "warning" });
    return;
  }

  const storage = check.checked ? localStorage : sessionStorage;
  const users = JSON.parse(storage.getItem("userData")) || [];
  const emailExists = users.some((user) => user.email === userData.email);

  if (emailExists) {
    showToast({ message: "Este E-mail já Está Cadastrado", type: "warning" });
    return;
  }

  users.push(userData);

  storage.setItem("userData", JSON.stringify(users));
  storage.setItem("currentUser", JSON.stringify(userData));

  showToast({
    message: check.checked
      ? "Conta Criada e Salva"
      : "Conta Criada, Mas Não Salva",
    type: "success"
  });

  const loginContainer = document.getElementById("loginContainer");
  if (loginContainer) {
    loginContainer.remove();
  }

  nexusOverlay();
}