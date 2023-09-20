'use client';
import React, { useState } from 'react'
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
    const [transactions, setTransactions] = useState<any[]>([
        { id: 0, title: 'Cash', amount: -4000 },
        { id: 1, title: 'Salary', amount: 70000 }
    ]);
    const [text, setText] = useState('');
    const [value, setValue] = useState('');

    const addTransaction = (e: any) => {
        e.preventDefault();
        if (text.length > 0 && +value != 0) {
            const transaction = { id: new Date(), title: text, amount: value }
            setTransactions(perv => {
                return [...perv, transaction];
            });
            setText('');
            setValue('');
        } else {
            alert('Enter Valid Values');
        }
    }
    const deleteTransaction = (id: any) => {
        setTransactions(prev => {
            return prev.filter(transaction => {
                return transaction.id != id;
            })
        })
    }
    const calculateBalance = () => {
        let sum = 0;
        for (let i = 0; i < transactions.length; i++) {
            sum += +transactions[i].amount;
        }
        return sum;
    }
    const calculateIncome = () => {
        let income = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (+transactions[i].amount > 0)
                income += +transactions[i].amount;
        }
        return income;
    }
    const calculateExpense = () => {
        let expense = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (+transactions[i].amount < 0)
                expense += +transactions[i].amount;
        }
        return expense;
    }
    return (
        <>
            <h2>Expense Tracker</h2>

            <div className="container">

                <h4>Your Balance</h4>
                <h1 id="balance">${calculateBalance()}</h1>

                <div className="inc-exp-container">
                    <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money plus">+${calculateIncome()}</p>
                    </div>
                    <div>
                        <h4>Expense</h4>
                        <p id="money-minus" className="money minus">-${calculateExpense()}</p>
                    </div>
                </div>

                <h3>History</h3>
                <ul id="list" className="list">
                    {transactions.map(transaction => {
                        return <li key={transaction.id}
                            className={transaction.amount > 0 ? "plus" : "minus"}>
                            {transaction.title} <span>{transaction.amount}</span>
                            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
                        </li>
                    })}
                </ul>

                <h3>Add new transaction</h3>
                <form id="form" onSubmit={(e) => addTransaction(e)}>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input type="text" id="text" placeholder="Enter text..."
                            value={text}
                            onChange={(e) => setText(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount"
                        >Amount <br />
                            (negative - expense, positive - income)</label>
                        <input type="number" id="amount" placeholder="Enter amount..."
                            value={value}
                            onChange={(e) => setValue(e.target.value)} />
                    </div>
                    <button type='submit' className="btn">Add transaction</button>
                </form>
            </div>
        </>
    )
}

export default ExpenseTracker