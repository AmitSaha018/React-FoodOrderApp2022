import { useRef } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    const nameInpuRef = useRef();
    const streetInpuRef = useRef();
    const postalCodeInpuRef = useRef();
    const cityInpuRef = useRef();
  const confirmHandler = (event) => {
      event.preventDefault();
      const enteredName = nameInpuRef.current.value;
      const enteredStreet = streetInpuRef.current.value;
      const enteredPostalCode = postalCodeInpuRef.current.value;
      const enteredCity = cityInpuRef.current.value;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInpuRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInpuRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInpuRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInpuRef} />
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;