// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";
// import { selectCartItems } from "../../store/cart/cart.selector";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import {
    ProductCartContainer,
    Footer,
    Name,
    Price,
  } from './product-card.styles';

const ProductCard = ({product})=> {
    const { name, price, imageUrl } = product;
    // const {addItemToCart} = useContext(CartContext);
    const dispatch = useDispatch();
    // const cartItems = useSelector(selectCartItems);

    const addProductToCart = ()=> dispatch(addItemToCart(product));

    return (
        <ProductCartContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={addProductToCart}
            
        >
            <p>Add to cart</p>
        </Button>
        </ProductCartContainer>
    );
};

export default ProductCard;