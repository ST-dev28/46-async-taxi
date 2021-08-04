class Taxi {

    // Set Timeout versija
    print(km) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (typeof km === 'number') {
                    res(`Nuvaziuota: ${km} km.`);
                } else {
                    rej('Kilometrai turi buti skaiciai.');
                }
            }, 1000);
        })
    }

    async drive(distance) {
        for (let i = 1; i <= distance; i++) {
            await this.print(i)
                .then((msg) => {
                    console.log(msg);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        console.log('Kelione baigta.');
    }

    // Set Interval versija
    // drive(distance) {
    //     let currentDistance = 0;

    //     return new Promise((resolve, reject) => {
    //         const timer = setInterval(() => {
    //             console.log(`Nuvaziuota: ${++currentDistance} km.`);

    //             if (currentDistance === distance) {
    //                 clearInterval(timer);
    //                 console.log('Kelione baigta.');
    //                 resolve();
    //             }
    //         }, 1000);
    //     })
    // }
}

module.exports = Taxi;