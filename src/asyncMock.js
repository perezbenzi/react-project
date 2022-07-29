const products = [
    {
        id: "1",
        name: "Ventana",
        price: 30000,
        category: "ventanas",
        img: `${process.env.PUBLIC_URL}/images/ventana-corrediza.jpg`,
        stock: 10,
        description: "Descripcion de la ventana",
    },

    {
        id: "2",
        name: "Puerta",
        price: 36000,
        category: "puertas",
        img: `${process.env.PUBLIC_URL}/images/puerta-abrir-2.jpg`,
        stock: 4,
        description: "Descripcion de la puerta",
    },

    {
        id: "3",
        name: "Postigo",
        price: 36000,
        category: "postigos",
        img: `${process.env.PUBLIC_URL}/images/postigon.jpg`,
        stock: 9,
        description: "Descripcion del postigo",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === id));
        }, 500);
    });
};
