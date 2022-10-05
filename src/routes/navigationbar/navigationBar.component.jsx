import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const NavigationBar =()=>{
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

      </div>

      
      </div>
      <Outlet/>
      </Fragment>
    )
  }

  export default NavigationBar