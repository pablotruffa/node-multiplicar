const opts = {
    base: {
        demand: true,
        alias: 'b',
        default: 10,
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea la tabla de multiplicar en un archivo', opts)
    .help()
    .argv;

module.exports = {
    argv
}