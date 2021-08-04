/*
Po miesta vazineja vienas taksistas.

Zmones gali issikviesti taksista ir pasako kaip toli ketina vaziuoti, o taksistas juos veza.

Vaziuojamas atstumas yra kilometrais.

Per 1 sekunde yra nuvaziuojama kilometras.

Kiekvienos keliones metu, kas sekunde, reikia isspausdinti keliones progresa - kiek kilometru nuvaziavo.

Keliones pabaigoje - parasyti "Kelione baigta";
*/

const Taxi = require('./Taxi');

(async () => {

    const petras = new Taxi();

    await petras.drive(2);
    await petras.drive(3);
    await petras.drive(4);
    await petras.drive(2);

})();
