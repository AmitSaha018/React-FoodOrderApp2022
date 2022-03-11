import React from 'react';
import Input from '../../UI/Input';
import Classes from './MealItemForm.module.css';

const MealIteamForm = (props) => {
  return (
      <form className={Classes.form}>
          <Input label="Amount" input={{
              id: 'amount_' + props.id,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1'
          }}/>
          <button> + Add</button>
    </form>
  );
};

export default MealIteamForm;