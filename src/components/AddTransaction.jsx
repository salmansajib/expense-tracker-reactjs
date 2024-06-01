import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { nanoid } from 'nanoid';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [textErrorMessage, setTextErrorMessage] = useState('');
  const [amountErrorMessage, setAmountErrorMessage] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  function handleSubmitTransition(e) {
    e.preventDefault();

    let isValid = true;

    if (text === '') {
      setTextErrorMessage('Please add some text');
      isValid = false;
    } else {
      setTextErrorMessage('');
    }

    if (amount === 0) {
      setAmountErrorMessage('Please add some amount');
      isValid = false;
    } else {
      setAmountErrorMessage('');
    }

    if (!isValid) return;

    const newTransaction = {
      id: nanoid(),
      text,
      amount: parseInt(amount),
    };

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmitTransition}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
          {textErrorMessage && (
            <p style={{ color: 'red' }}> {textErrorMessage} </p>
          )}
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            <span
              style={{
                fontSize: '16px',
                color: 'green',
              }}
            >
              For income use a positive (+) value,
              <br /> For expense use a negative (-) value
            </span>
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
          {amountErrorMessage && (
            <p style={{ color: 'red' }}> {amountErrorMessage} </p>
          )}
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
