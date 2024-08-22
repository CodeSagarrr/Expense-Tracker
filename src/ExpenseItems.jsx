import React, { useContext } from 'react'
import { ExpenceContext } from './ExpenceContext'

const ExpenseItems = ({expence}) => {
    const {dispatch} = useContext(ExpenceContext);
    const handleDelete = ()=>{
        dispatch({type: 'DELETE_EXPENSE', payload: expence.id})
    }
  return (
    <>
     <li>
     {expence.descriptions} - ${expence.amount} [{expence.category}]
        <button onClick={handleDelete}>Delete</button>
    </li>
    </>
  )
}

export default ExpenseItems
