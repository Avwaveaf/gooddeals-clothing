import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"

import { signOutUser } from "../../utils/firebase/firebase.utils"
import { UserContext } from "../../components/contexts/user.context"
import { CartContext } from "../../components/contexts/cart.context"

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './navigation.styles.scss'

import { CartIcon } from "../../components/cart-icon/cart-icon.component"
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component"

const NavigationBar =()=>{
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)


    return(
      <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <div>
                <Logo className="logo"/>
            </div>
        </Link>
      <div className="nav-links-container">
      <Link className="nav-link" to='/shop'>
      Shop
  </Link> 
  {
    currentUser?(
    <Fragment>
    <span className="nav-link" onClick={signOutUser}>Log out</span>
    
    <span className="nav-link">{`hi! ${currentUser.displayName}`}</span>
    </Fragment>

    ):(
      <Link className="nav-link" to='/login'>
      Login
      </Link>
    )
    
  }
      <CartIcon />
  
      </div>
      {
        isCartOpen&&<CartDropdown/>
      }
      </div>
      <Outlet/>
      </Fragment>
    )
  }

  export default NavigationBar