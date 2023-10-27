import React,{useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title,setTitel] = useState(props.title)
    const [amount,setTitel1] = useState(props.amount)

    const clik = () => {
        setTitel('updated')
        setTitel1(100);
    }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clik}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;