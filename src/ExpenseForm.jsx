import React, { useContext, useState } from 'react'
import { ExpenceContext } from './ExpenceContext'

const ExpenseForm = () => {
    const [amount, setAmount] = useState('');
    const [descriptions, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const {dispatch} = useContext(ExpenceContext)
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpence = {
            id: Date.now(),
            amount: parseFloat(amount),
            descriptions,
            category,
            date: new Date().toLocaleDateString(),
        };
        dispatch({ type: 'ADD_EXPENSE', payload: newExpence })
        setAmount('');
        setDescription('');
        setCategory('');

        console.log(newExpence)
    }
   
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type="number" value={amount} placeholder='Amount' required onChange={(e) => setAmount(e.target.value)} />

                <input type="text" value={descriptions} placeholder='Descriptions' required onChange={(e) => setDescription(e.target.value)} />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Category</option>
                    <option value="food">Food</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                </select>

                <button type='submit'>Add Expense</button>

            </form>
        </>
    )
}

export default ExpenseForm
