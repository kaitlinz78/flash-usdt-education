const fs = require('node:fs');
const assert = require('node:assert/strict');

const path = 'build/contracts/FlashUsdtDemo.json';
assert.ok(fs.existsSync(path), 'Missing compiled contract artifact');
const artifact = JSON.parse(fs.readFileSync(path, 'utf8'));
const bytecode = String(artifact.bytecode || '').replace(/^0x/, '');
assert.ok(bytecode.length > 100 && /^[0-9a-fA-F]+$/.test(bytecode),
  'Missing or invalid contract bytecode');
const abi = artifact.abi || [];
for (const method of ['name', 'symbol', 'decimals', 'totalSupply',
                      'balanceOf', 'transfer', 'Transfer']) {
  assert.ok(abi.some(entry => entry.name === method),
    `Contract ABI is missing: ${method}`);
}
console.log('Compiled artifact OK: educational token ABI and bytecode exist.');
console.log('This is NOT evidence of on-chain deployment or real USDT.');
