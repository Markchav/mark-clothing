import { useDispatch,useSelector} from "react-redux";

import { selectCartCount,selectIsCartOpen} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

// import { useContext } from "react";

// import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = ()=> {
    const dispatch = useDispatch();
    // const {isCartOpen, setIsCartOpen,cartCount} = useContext(CartContext);


    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = ()=> dispatch(setIsCartOpen(!isCartOpen));

return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping-icon"/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
);
};

export default CartIcon;