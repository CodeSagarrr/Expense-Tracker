import React from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {


  return (
    <>
      // components
      <div className="App">
            <h1>Expense Tracker</h1>
            <ExpenseForm />
            <ExpenseList />
        </div>
    </>
  )
}

export default App
