import React from 'react';
import { Link } from 'react-router';
import Cart from '../Cart/Cart';
import styles from './NavBar.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isHomePage = this.props.location.pathname === '/';
    const logo = isHomePage ? styles.lightLogo : styles.logo;
    const cart = isHomePage ? null : <Cart cart={this.props.cart} location={this.props.location.pathname}/>;
    const navbar = isHomePage ? styles.transparentNavbar : styles.navbar;

    return (
        <nav className={navbar}>
          <h1>
            <Link to="/" className={logo}>Beer.ly</Link>
          </h1>
          <ul>
            <li>
              {cart}
            </li>
          </ul>
        </nav>
    );
  }
}

Nav.propTypes = {
  location: React.PropTypes.object.isRequired,
  cart: React.PropTypes.array
};

export default Nav;
