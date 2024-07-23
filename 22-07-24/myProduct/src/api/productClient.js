export const getProductList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(() => {
                return [{
                    id: 1,
                    name: "Uniq one",
                    image: "#",
                    description: `TRATTAMENTO PER CAPELLI TUTTO IN UNO

Innovazione mondiale nella cura dei capelli.

La prima maschera spray senza risciacquo disponibile sul mercato che offre ai capelli 10 BENEFICI fondamentali di cui hanno bisogno.`,
                    barcode: "1234567890",
                    cost: 3.4,
                    price: 12.9,
                    quantity: 12
                },
                {
                    id: 2,
                    name: "Uniq one green tea",
                    image: "#",
                    description: `Revlon Professional UniqONE Green Tea Scent Hair Treatment è un trattamento che racchiude 10 benefici reali in un solo prodotto con una fresca e profumata fragranza al Thé Verde.

Ideale per capelli secchi e danneggiati da fattori ambientali o chimici come trattamento di riparazione della fibra, apportando estrema lucentezza ed eliminando l'effetto crespo per ciocche favolosamente morbide.`,
                    barcode: "1234567890",
                    cost: 3.4,
                    price: 12.9,
                    quantity: 10
                }]
            })
        }, 1000)
    })
}

// quando i dati del backend saranno pronti potremo sostituire la funzione di sopra con questa

/* export const getProductList = async () => {

    try {
        const data = await fetch(
            `https://jsonplaceholder.typicode.com/users`
        );
        const res = await data.json();
        return res;
    } catch (error) {

        console.log(error);
    }
}   */