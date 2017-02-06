import React from 'react';
import styles from './Checkout.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

import { stripePublishableKey, stripeTestKey } from '../../../server/config/apiKeys';
import { ReactScriptLoaderMixin } from 'react-script-loader';

var Checkout = React.createClass({
  mixins: [ ReactScriptLoaderMixin ],

  getInitialState: function() {
    return {
      stripeLoading: true,
      stripeLoadingError: false,
      submitDisabled: false,
      paymentError: null,
      paymentComplete: false,
      token: null
    };
  },

  getScriptURL: function() {
    return 'https://js.stripe.com/v2/';
  },

  onScriptLoaded: function() {
    if (!Checkout.getStripeToken) {
      // Put your publishable key here
      Stripe.setPublishableKey(stripePublishableKey);

      this.setState({ stripeLoading: false, stripeLoadingError: false });
    }
  },

  onScriptError: function() {
    this.setState({ stripeLoading: false, stripeLoadingError: true });
  },

  onSubmit: function(event) {
    var self = this;
    event.preventDefault();

    // prevent duplicate charges by disabling submit button
    this.setState({ submitDisabled: true, paymentError: null });
    // send form here
    Stripe.createToken(event.target, function(status, response) {
      if (response.error) {
        self.setState({ paymentError: response.error.message, submitDisabled: false });
      }
      else {
        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
        // make request to your server here!
        
        axios.post('auth/checkout', {
          stripeToken: response.id,
          //amount
        })
          .then((response) => {
            
          })
          .catch((error) => {
            
          });
      }
    });
  },

  render: function() {
    if (this.state.stripeLoading) {
      return (
        <div className={styles.wrapper}>
          <div>Loading</div>
        </div>
      );
    }
    else if (this.state.stripeLoadingError) {
      return (
        <div className={styles.wrapper}>
          <div>Error</div>
        </div>
      );
    }
    else if (this.state.paymentComplete) {
      return (
        <div className={styles.wrapper}>
          <div>Payment Complete!</div>
        </div>
      );
    }
    else {
      return (
        <div className={styles.wrapper}>
          <form onSubmit={this.onSubmit} >
            <div className={styles.flexRow}>
              <div className={styles.flexItem}>
                <h2 className={styles.section}>Delivery Address</h2>
                <input className={styles.input} type='text' data-stripe='name' placeholder='Name' /><br />
                <input className={styles.input} type='text' data-stripe='address-line1' placeholder='Address' /><br />
                <input className={styles.input} type='text' data-stripe='address-city' placeholder='City' /><br />
                <input className={styles.input} type='text' data-stripe='address-state' placeholder='State' /><br />
                <input className={styles.input} type='text' data-stripe='address-zip' placeholder='Zipcode' /><br />
                <input className={styles.input} type='text' data-stripe='address-country' placeholder='Country' /><br />
              </div>

              <div className={styles.flexItem}>
                <h2 className={styles.section}>Payment Method</h2>
                <input className={styles.input} type='text' data-stripe='number' placeholder='Credit Card Number' /><br />
                <input className={styles.input} type='text' data-stripe='exp-month' placeholder='Expiration Month' /><br />
                <input className={styles.input} type='text' data-stripe='exp-year' placeholder='Expiration Year' /><br />
                <input className={styles.input} type='text' data-stripe='cvc' placeholder='CVC' /><br />

                <span>{ this.state.paymentError }</span><br />
                <input className={styles.submit} disabled={this.state.submitDisabled} type='submit' value='Purchase' />
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
});


export default Checkout;