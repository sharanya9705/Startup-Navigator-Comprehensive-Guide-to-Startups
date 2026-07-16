const assert=require('node:assert'); const fs=require('node:fs');
for(const file of ['index.html','styles.css','app.js','vercel.json','README.md']) assert.ok(fs.existsSync(file),file+' missing');
const js=fs.readFileSync('app.js','utf8');
for(const term of ['Company Registration','Funding & Fundraising','Legal & Compliance','AI Tools & Automation','admin@startupnavigator.app','localStorage']) assert.ok(js.includes(term),term+' missing');
console.log('All application verification checks passed.');
