const fs = require('fs');
fs.writeFileSync('src/App.tsx', fs.readFileSync('src/App.tsx', 'utf8').replace(/\\$\\//g, '$'));
