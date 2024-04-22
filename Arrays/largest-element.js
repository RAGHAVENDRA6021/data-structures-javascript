const a = [1, 221, 3, 22, 321]
const ans = a.reduce((prev, curr) => Math.max(prev, curr), Number.MIN_SAFE_INTEGER)
console.log(ans)