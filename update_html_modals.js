const fs = require('fs');
let html = fs.readFileSync('../site-roupas/index.html', 'utf8');

const modals = `
    <!-- MODAIS DO SISTEMA -->
    <div id="toast-container" class="toast-container"></div>

    <!-- Modal Login/Cadastro -->
    <dialog id="auth-modal" class="custom-modal">
        <div class="modal-content auth-content">
            <button class="modal-close" aria-label="Fechar">&times;</button>
            <div class="auth-tabs">
                <button class="auth-tab active" data-target="login-form">Login</button>
                <button class="auth-tab" data-target="register-form">Cadastro</button>
            </div>
            <form id="login-form" class="auth-form active">
                <input type="email" id="login-email" placeholder="Seu E-mail" required>
                <input type="password" id="login-password" placeholder="Sua Senha" required>
                <button type="submit" class="btn btn-primary w-100">Entrar</button>
            </form>
            <form id="register-form" class="auth-form">
                <input type="text" id="reg-name" placeholder="Nome Completo" required>
                <input type="email" id="reg-email" placeholder="E-mail" required>
                <input type="password" id="reg-password" placeholder="Senha" required>
                <button type="submit" class="btn btn-primary w-100">Criar Conta</button>
            </form>
        </div>
    </dialog>

    <!-- Modal de Tamanho/Quantidade -->
    <dialog id="size-modal" class="custom-modal">
        <div class="modal-content">
            <button class="modal-close" aria-label="Fechar">&times;</button>
            <h3 id="size-modal-product-name" style="margin-bottom: 10px;">Produto</h3>
            <p id="size-modal-product-price" style="margin-bottom: 20px; font-weight: bold;">R$ 0,00</p>
            <label style="display:block; margin-bottom: 10px;">Tamanho:</label>
            <div id="size-options" class="size-options"></div>
            <label style="display:block; margin-top: 20px; margin-bottom: 10px;">Quantidade:</label>
            <div class="quantity-selector">
                <button type="button" id="qty-minus">-</button>
                <input type="number" id="qty-input" value="1" min="1" max="99" readonly>
                <button type="button" id="qty-plus">+</button>
            </div>
            <button id="add-to-cart-btn" class="btn btn-primary w-100" style="margin-top: 25px;">Adicionar ao Carrinho</button>
        </div>
    </dialog>

    <!-- Modal Carrinho -->
    <dialog id="cart-modal" class="custom-modal right-sidebar">
        <div class="modal-content cart-content">
            <button class="modal-close" aria-label="Fechar">&times;</button>
            <h2>Seu Carrinho</h2>
            <div id="cart-items" class="cart-items"></div>
            <div class="cart-footer">
                <div class="cart-total-box">
                    <span>Total:</span>
                    <span id="cart-total-value">R$ 0,00</span>
                </div>
                <button id="checkout-btn" class="btn btn-primary w-100">Enviar Pedido</button>
            </div>
        </div>
    </dialog>
    
    <!-- Modal Área do Usuário -->
    <dialog id="user-modal" class="custom-modal">
        <div class="modal-content user-content">
            <button class="modal-close" aria-label="Fechar">&times;</button>
            <h2>Minha Conta</h2>
            <p><strong>Nome:</strong> <span id="user-info-name"></span></p>
            <p><strong>E-mail:</strong> <span id="user-info-email"></span></p>
            <button id="logout-btn" class="btn btn-primary" style="margin-top: 15px; background: #e74c3c;">Sair da Conta</button>
            <h3 style="margin-top: 30px; margin-bottom: 15px;">Meus Pedidos</h3>
            <div id="user-orders" class="orders-list"></div>
        </div>
    </dialog>
`;

if (!html.includes('<!-- MODAIS DO SISTEMA -->')) {
    html = html.replace('</body>', modals + '\n</body>');
    fs.writeFileSync('../site-roupas/index.html', html);
    console.log('Modals injected!');
} else {
    console.log('Modals already exist.');
}
