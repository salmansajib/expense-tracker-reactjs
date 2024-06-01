import { useContext } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);

  return (
    <>
      <h3>History</h3>

      {!transactions || transactions.length === 0 ? (
        <p
          style={{
            color: 'green',
          }}
        >
          Transaction history is empty! please add some transactions.
        </p>
      ) : (
        <ul className='list'>
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TransactionList;
