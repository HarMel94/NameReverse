import React from 'react';
import { useState } from 'react';

export default function NameRevers() {

  const [val, setVal] = useState('')

  function reverse(word){
    if(word){
      return word.split('').reverse().join('')
    }
  }

  return (
    <div className="App">

      <input 
        type='text'
        placeholder='I can reverse Your name'
        onChange={(e) => {setVal(e.target.value)}}
      />

      <h1>{reverse(val)}</h1>
      
    </div>
  );
}
