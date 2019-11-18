import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);
  const [startingValue, setStartingValue] = useState();

  function handleValueChange(e) {
    e.preventDefault();
    setStartingValue(e.target.value);
  }

  function onButtonClick() {
    setCount(startingValue);
  }


  return (
    <div>
      <br />
      <input
        placeholder="Enter a starting Value:"
        value={startingValue}
        onChange={handleValueChange}
        onSubmit={onButtonClick}
        type="Number"
      />
      <br />
      <button
        onClick={onButtonClick}
      >
        Submit
      </button>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter


// onChange -> changes display
// onSumbit -> changes count