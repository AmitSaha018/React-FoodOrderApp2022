import React,{ useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealIteamForm from './MealIteamForm';
import Classes from './MealItem.module.css';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
  return (
      <li className={Classes.meal}>
          <div>
              <h3>{props.name}</h3>
              <div className={Classes.description}>{props.description}</div>
              <div className={Classes.price}>{price}</div>
          </div>
          <div>
              <MealIteamForm id={props.id} onAddToCart={ addToCartHandler }/>
          </div>
    </li>
  );
};

export default MealItem;