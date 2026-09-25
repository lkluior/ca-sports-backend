const fs = require('fs');
let html = fs.readFileSync('../site-roupas/index.html', 'utf8');

// Replace article tag to add data-price and data-sizes
html = html.replace(/<article class="product-card"([^>]*)>/g, (match, p1) => {
    if (!p1.includes('data-price')) {
        return `<article class="product-card"${p1} data-price="89.90" data-sizes="P,M,G,GG">`;
    }
    return match;
});

// Add price visually below product-name
html = html.replace(/<h3 class="product-name">(.*?)<\/h3>/g, (match, p1) => {
    return `<h3 class="product-name">${p1}</h3>\n                            <p class="product-price" style="font-weight: 700; margin: 5px 0;">R$ 89,90</p>`;
});

fs.writeFileSync('../site-roupas/index.html', html);
console.log('Done!');
