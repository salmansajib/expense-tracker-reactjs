import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';

function App() {
  return (
    <div>
      <Header title='Expense Tracker' />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;