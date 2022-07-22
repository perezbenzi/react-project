import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return products.map((product) => (
        <Item id="1" key={product.id} product={product} />
    ));
};

export default ItemList;
