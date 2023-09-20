import AnimalAPI from '@/components/AnimalAPI';
import DogsAPI from '@/components/DogsAPI';
import ExpenseTracker from '@/components/ExpenseTracker';
import WeatherAPI from '@/components/WeatherAPI';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'A simple web app to calculate income and expense',
  keywords: 'expense, tracker, income, balance'
}

const Home = () => {
  return (
    // <TodoList />
    // <ExpenseTracker />
    // <WeatherAPI />
    // <AnimalAPI />
    <DogsAPI />
  )
}

export default Home