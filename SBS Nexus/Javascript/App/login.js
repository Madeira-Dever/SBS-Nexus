import { accountValidation } from "../Functions/validation.js";

export function loginOverlay () {
    const loginContainer = document.createElement("main");
    loginContainer.className = "loginContainer";
    loginContainer.id = "loginContainer";

    loginContainer.innerHTML = `
        <form action="#">

            <div class="userName" id="userName">        
                <label for="name" class="labelName">Nome:</label>
                <input type="text" placeholder="Digite seu Nome..." class="name" id="name">
            </div>

            <div class="userEmail" id="userEmail">        
                <label for="email" class="labelEmail">Email:</label>
                <input type="email" placeholder="Digite seu E-mail..." class="email" id="email">
            </div>

            <div class="userPassword" id="userPassword">        
                <label for="password" class="labelPassword">Senha:</label>
                <input type="password" placeholder="Digite sua Senha..." class="password" id="password">
            </div>

            <div class="saveUser" id="saveUser">
                <label for="check" class="labelCheck">
                    <input type="checkbox" class="check" id="check">Salvar Usuário
                </label>
            </div>

            <div class="btnAccount" id="btnAccount">
                <button type="button">Criar Conta Bancária</button>
            </div>
        </form>
    `;

    document.body.append(loginContainer);

    const btn = document.querySelector("button");
    btn.addEventListener("click", () => accountValidation());
}