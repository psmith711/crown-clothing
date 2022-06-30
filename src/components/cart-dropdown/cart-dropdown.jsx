import './cart-dropdown.scss';
import Button from '../button/button';
import {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    const {cartOpen, setCartOpen} = useContext(CartContext);

    return (
        <div className='cart-dropdown-container' style={!cartOpen ? {display: 'none'}: {}}>
            <div className='cart-items'></div>
            <Button>Checkout</Button>
        </div>
    )
}

export default CartDropdown