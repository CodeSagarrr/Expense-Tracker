import React, { useContext } from 'react'
import { ExpenceContext } from './ExpenceContext'
import ExpenseItems from './ExpenseItems';

const ExpenseList = () => {
    const { state } = useContext(ExpenceContext); 

  
    if (!state || !state.expenses) {
        return <p>No expenses available.</p>;
    }
  return (
    <>
    <ul>
        {
            state.expenses.map((expence)=>(
                <ExpenseItems key={expence.id} expence={expence}/>
            ))
        }
    </ul>
    
      
    </>
  )
}

export default ExpenseList
