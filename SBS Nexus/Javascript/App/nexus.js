import { setTimer } from "../Functions/timer.js";
import { loginOverlay } from "./login.js";
import { thisMenuBtn } from "../Functions/btnSettings.js";
import { depositSize } from "../Functions/Operations/deposit.js";
import { withdrawSize } from "../Functions/Operations/withdraw.js";
import { transferSize } from "../Functions/Operations/transfer.js";
import { loadHistory } from "../Functions/Operations/history.js";
export function nexusOverlay() {
  const users =
    JSON.parse(localStorage.getItem("userData")) ||
    JSON.parse(sessionStorage.getItem("currentUser")) ||
    [];

  const userData = users[users.length - 1];

  const number = `
        ${Math.floor(Math.random() * 10000)
          .toString()
          .padStart(4, "0")}-${Math.floor(Math.random() * 10)}
    `;

  const balance = `
        ${Math.floor(Math.random() * 1000)
          .toString()
          .padStart(3, "0")},${Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0")}
    `;

  const mainContainer = document.createElement("main");
  mainContainer.className = "mainContainer";
  mainContainer.id = "mainContainer";

  mainContainer.innerHTML = `
        <header class="header" id="header">
            <div class="brand" id="brand">
                <h1>SBS Nexus</h1>
                <span>Sistema Bancário Seguro Nexus</span>
            </div>

            <div class="userPanel" id="userPanel">
                <div class="userInfo" id="userInfo">
                    <span>Cliente</span>
                    <strong class="clientName" id="clientName"> ${userData?.name || "Cliente"} </strong>
                </div>

                <div class="accountInfo" id="accountInfo">
                    <span>Conta</span>
                    <strong class="accountNumber" id="accountNumber"> ${number.trim()} </strong>
                </div>
            </div>

            <button class="logout" id="logout">Sair</button>
        </header>

        <section class="content" id="content">
            <aside class="sideMenu">
                <button class="menuButton" id="home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 10.5L12 3l9 7.5"/>
                        <path d="M5 9.5V21h14V9.5"/>
                        <path d="M9 21v-6h6v6"/>
                    </svg>
                    Início
                </button>

                <button class="menuButton" id="deposit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M12 7v10"/>
                        <path d="M8 11l4-4 4 4"/>
                    </svg>
                    Depositar
                </button>

                <button class="menuButton" id="withdraw">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M12 17V7"/>
                        <path d="M8 13l4 4 4-4"/>
                    </svg>
                    Sacar
                </button>

                <button class="menuButton" id="transfer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 3l4 4-4 4"/>
                        <path d="M3 7h18"/>
                        <path d="M7 21l-4-4 4-4"/>
                        <path d="M21 17H3"/>
                    </svg>
                    Transferência
                </button>

                <button class="menuButton" id="history">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <path d="M14 2v6h6"/>
                        <path d="M8 13h8"/>
                        <path d="M8 17h5"/>
                    </svg>
                    Extrato
                </button>
            </aside>

            <section class="dashboard" id="dashboard">
                <div class="balanceCard" id="balanceCard">
                    <span> Saldo disponível </span>
                    <h2 class="balanceValue" id="balanceValue"> R$ ${balance} </h2>
                    <small> Atualizado agora </small>
                </div>

                <div class="operationPanel" id="operationPanel">
                    <div class="welcomeScreen" id="welcomeScreen">
                        <h2>Bem-vindo ao SBS Nexus</h2>
                        <p>Escolha uma operação no menu.</p>
                    </div>

                    <div class="depositBox" id="depositBox">
                        <h2>Depósito</h2>

                        <label for="depositInput" class="labelDeposit" id="labelDeposit">Valor desejado</label>
                        <input
                            type="number"
                            placeholder="R$ 0,00"
                            class="depositInput"
                            id="depositInput"
                        />

                        <button class="depositConfirm" id="depositConfirm">Confirmar</button>
                    </div>

                    <div class="withdrawBox" id="withdrawBox">
                        <h2>Saque</h2>

                        <label for="withdrawInput" class="labelValue" id="labelValue">Valor desejado</label>
                        <input
                            type="number"
                            placeholder="R$ 0,00"
                            class="withdrawInput"
                            id="withdrawInput"
                        />

                        <button class="withdrawConfirm" id="withdrawConfirm">Confirmar Saque</button>
                    </div>

                    <div class="transferBox" id="transferBox">
                        <h2>Transferência</h2>

                        <label for="targetAccount" class="labelAccount" id="labelAccount">Conta destino</label>
                        <input
                            type="tel"
                            inputmode="numeric"
                            pattern="[0-9]{4}-[0-9]"
                            placeholder="0000-0"
                            maxlength="6" 
                            minlength="6"
                            class="targetAccount"
                            id="targetAccount"
                        />

                        <label for="transferInput" class="labelPrice" id="labelPrice">Valor</label>
                        <input
                            type="number"
                            placeholder="R$ 0,00"
                            class="transferInput"
                            id="transferInput"
                        />

                        <button class="transferConfirm" id="transferConfirm">Transferir</button>
                    </div>

                    <div class="operationBox" id="historyBox">
                        <h2>Últimas movimentações</h2>

                        <ul class="transactionList" id="transactionList">
                            <li>Nenhuma movimentação.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>

        <footer class="footer" id="footer">
            <div class="security" id="security">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    <circle cx="12" cy="16" r="1"/>
                </svg>
                <span>Conexão Segura</span>
            </div>
            <div class="systemMessage" id="systemMessage">Sistema Seguro.</div>
            <div class="time" id="time"></div>
        </footer>
    `;

  document.body.append(mainContainer);
  setTimer();

  const logout = document.getElementById("logout");
  logout.addEventListener("click", () => {
    mainContainer.remove();
    loginOverlay();
  });

  const menuBtn = document.querySelectorAll(".menuButton");
  menuBtn.forEach((btn) => thisMenuBtn(btn));

  const depositBtn = document.getElementById("depositConfirm");
  depositBtn.addEventListener("click", () => depositSize());

  const withdrawBtn = document.getElementById("withdrawConfirm");
  withdrawBtn.addEventListener("click", () => withdrawSize());

  const transferBtn = document.getElementById("transferConfirm");
  transferBtn.addEventListener("click", () => transferSize());

  const targetAccount = document.getElementById("targetAccount");
  targetAccount.addEventListener("input", (e) => {
    let value = e.target.value.replace("/\D/g", "");
    if (value.length > 4) {
      value = `${value.slice(0, 4)}-${value.slice(4, 5)}`;
    }
    e.target.value = value;
  });

  const historyBtn = document.getElementById("history");
  historyBtn.addEventListener("click", () => loadHistory());
}