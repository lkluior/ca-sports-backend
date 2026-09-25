const fs = require('fs');
let html = fs.readFileSync('../site-roupas/index.html', 'utf8');

html = html.replace('<link rel="stylesheet" href="css/style.css">', '<link rel="stylesheet" href="css/style.css">\n    <link rel="stylesheet" href="css/modals.css">');
html = html.replace('<script src="js/script.js" defer></script>', '<script src="js/script.js" defer></script>\n    <script src="js/api.js" defer></script>');

fs.writeFileSync('../site-roupas/index.html', html);
console.log('Links injected!');
