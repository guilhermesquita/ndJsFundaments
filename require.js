const path = require('path')
const meuModulo = require('./exports')

console.log(path.basename(__filename)) //imprimirá com o nome do arquivo (require.js)
console.log(meuModulo)