const fs = require('fs');
const colors = require('colors')

const crearArchivo = async(base = 1, listar = false, hasta = base+1) => {/* asyc devuelve una promesa */
    
    try {/* await funciona como resolve */

        let nombres = []

        for (let i = base; i <= hasta; i++) { console.log('i:',i);
            
            let salida = '';

            for (let i = 1; i < 11; i++) {
                if(i < 10) {
                    salida += `${base} x ${i} = ${base * i}\n`;
                } else {
                    salida += `${base} x ${i} = ${base * i}`;
                }
            }

            if (listar) {

                console.log('-------------------');
                console.log(`    Tabla del ${base}`.rainbow);
                console.log('-------------------');
                console.log(salida)

            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            nombres.push(`tabla-${base}.txt`);

            base++
            
        }

        return nombres

    } catch (e) { /* throw funciona como reject */
        throw e;
    }

}

module.exports = { /* exporta un objeto */
    crearArchivo /* crearArchivo: crearArchivo es redundante / exporta la funcion */
}