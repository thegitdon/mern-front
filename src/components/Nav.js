import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { isAuthenticated, signout } from './apiCore'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return {color: '#ff9900'}
    } else {
      return {color: '#ffffff'}
    }
  }

//export default class Nav extends Component {
    const Nav = ({history}) => {
    //render() {
        return (
            /*<div>
                Navigation
            </div>*/
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/*<a class="navbar-brand" href="#">Navbar</a>*/}
                {/**<div className="container"> */}
                <Link className="navbar-brand" to="/">
                    {/*Ronald's Delivery*/}Madeira Asados
                </Link>
                {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
        </button>*/}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                            <Link className="nav-link" to="/teststock">MR</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">Create User</Link>
                        </li>
                        {/**{isAuth, Link Singup, <> */}
                        {!isAuthenticated() && (
                            <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/singup">Singup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Log in</Link>
                            
                            {/**</>)} */}
                            {/**isAuth Link profile, Link Logout */}
                        </li>
                        </>
              )}

              {/** */}
              { isAuthenticated() && (
                <>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link
                    onClick={() =>
                        signout(() => {
                          history.push("/signin");
                        })} className="nav-link">
                      Logout
                    </Link>
                  </li>
                </>
              )}
                    </ul>
                </div>
            </nav>
        )
    }
//}

export default withRouter(Nav);
