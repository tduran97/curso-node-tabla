const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
    .then((nombres) => {
        console.log(nombres)
        for(let i = 0; i < nombres.length; i++){
            console.log(`${nombres[i]} creado`)
        }
    })
    .catch((err) => console.log(err))