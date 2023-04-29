import { useState } from 'react';

const UseStateExample = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const onTextChange = (e) => {
    setText(e.target.value)
  };

  const onConfirm = () => {
    alert(text);
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => { 
    setCount((prevCount) => prevCount - 1); 
  };

  console.log('rendering...');
  return (
    <>
      <div className='mt-32 mb-16'>
        <input
          type='text'
          className='mr-8'
          value={text}
          onChange={onTextChange}
        />
        <button disabled={!text} onClick={onConfirm}>Confirm</button>
      </div>

      <div>
        <button onClick={decreaseCount}>-</button>
        <span className='ml-8 mr-8'>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
    </>
  );
};

export default UseStateExample;
