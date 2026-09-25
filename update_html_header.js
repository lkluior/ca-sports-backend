const fs = require('fs');
let html = fs.readFileSync('../site-roupas/index.html', 'utf8');

const icons = `
            <div class="user-cart-icons" style="display: flex; gap: 15px; margin-left: 15px;">
                <button id="user-btn" aria-label="Minha Conta" style="background: none; border: none; cursor: pointer; color: white;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </button>
                <button id="cart-btn" aria-label="Carrinho" style="background: none; border: none; cursor: pointer; color: white; position: relative;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <span id="cart-badge" style="position: absolute; top: -5px; right: -10px; background: #e74c3c; color: white; border-radius: 50%; font-size: 12px; padding: 2px 6px; display: none;">0</span>
                </button>
            </div>
`;

if (!html.includes('user-cart-icons')) {
    html = html.replace('</nav>', '</nav>\n' + icons);
    fs.writeFileSync('../site-roupas/index.html', html);
    console.log('Icons injected!');
} else {
    console.log('Icons already exist.');
}
