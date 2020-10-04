const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida "${ base }" no es un numero`.red);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido "${ limite }" no es un numero`.red);
            return;
        }
        let output = `==================== \n TABLA del ${ base } al ${ limite } \n==================== \n`.green;
        for (let i = 1; i <= limite; i++) {
            output += `${ base } * ${ i } = ${ base * i } \n`;
        }
        resolve(output);

    });


}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${ base }" no es un numero`.red);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite introducido "${ limite }" no es un numero`.red);
            return;
        }

        let output = '';
        for (let i = 1; i <= limite; i++) {
            output += `${ base } * ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`./tablas/tabla-${ base }`, output, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${ base }`.blue);

        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla,
}