const fs = require('fs');
const code = fs.readFileSync('/tmp/live.js', 'utf8');
const urls = code.match(/https:\/\/[^"'`\s)]+/g) || [];
const uniqueUrls = [...new Set(urls)];
console.log('Total URLs:', uniqueUrls.length);
uniqueUrls.forEach(u => console.log(u));
