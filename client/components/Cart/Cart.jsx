import React from 'react';
import Drawer from 'material-ui/Drawer';
import Badge from 'material-ui/Badge';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';
// import styles from './Cart.css';


const iconStyles = {
  marginRight: 24,
};

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {open: false};

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const beersInCart = this.props.cart.map((beer) => {
      return <MenuItem primaryText={beer.name} />;
    });

    return (
      <div onClick={this.handleToggle}>
        <Badge badgeContent={this.props.cart.length} secondary={true} badgeStyle={{top: 12, right: 12}}>
          <IconButton tooltip="Cart">
            <ShoppingCartIcon style={iconStyles} />
          </IconButton>
        </Badge>
        <Drawer
          docked={false}
          openSecondary={true}
          width={500}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          {beersInCart}
        </Drawer>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: React.PropTypes.array
};

export default Cart;
