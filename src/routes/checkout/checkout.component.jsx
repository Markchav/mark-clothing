import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
} from './checkout.styles';

const Checkout =() => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Image</span>
            </HeaderBlock>
            <HeaderBlock>
            <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
            <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
            <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
            <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
                {cartItems.map((cartItem)=> (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))}
                <Total>Total : ${cartTotal}</Total>
                <PaymentForm/>
                <div className="warning-container">
      <h3>Warning: Test Credit Card Information</h3>
      <p>
        Please note that the following credit card details are intended for testing purposes only. They should not be used for real transactions.
      </p>
      <p>
        <strong>VISA:</strong> 4242 4242 4242 4242
      </p>
      <p>
        <strong>MASTERCARD:</strong> 5555 5555 5555 4444
      </p>
      <p>
        Expiration Date: Any future date
        <br />
        CVV: Any 3 digits
      </p>
    </div>
            </CheckoutContainer>
    );
};

export default Checkout;