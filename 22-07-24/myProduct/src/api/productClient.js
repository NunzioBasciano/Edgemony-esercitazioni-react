export const getProductList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(() => {
                return [{
                    id: 1,
                    name: "Product 1",
                    image: "#",
                    description: "Product 1 Description",
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