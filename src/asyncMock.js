const products = [
  {
    id: "1",
    name: "ventana",
    price: 30000,
    category: "ventanas",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040",
    stock: 10,
    description: "Descripcion de la ventana",
  },

  {
    id: "2",
    name: "puerta",
    price: 36000,
    category: "puertas",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040",
    stock: 10,
    description: "Descripcion de la puerta",
  },

  {
    id: "3",
    name: "postigo",
    price: 36000,
    category: "postigos",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040",
    stock: 10,
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
