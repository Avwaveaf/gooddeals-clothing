import { useContext } from 'react'
import { ReactComponent as CartIconSVG } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

import { CartContext } from '../contexts/cart.context'

export const CartIcon =()=>{
    const {isCartOpen,setIsCartOpen} = useContext(CartContext)
    const cartClickHandler = ()=>{
        isCartOpen?setIsCartOpen(false):setIsCartOpen(true)
    }
    return <div className='cart-icon-container' onClick={cartClickHandler}>
        <CartIconSVG className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
}
