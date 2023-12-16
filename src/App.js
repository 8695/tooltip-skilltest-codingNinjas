
import React, { useState } from 'react';
import Tooltip from './hover';

const App = () => {
  
  const [position, setPosition]=useState("");
  return (
    <>
    <p className='heading'> Click any button then hover it</p>
    <div className='BTN'>
      <button className='btn-hover' onClick={()=>setPosition('top')}>Top</button>
      <button className='btn-hover' onClick={()=>setPosition('right')}>right</button>
      <button className='btn-hover' onClick={()=>setPosition('bottom')}>bottom</button>
      <button className='btn-hover' onClick={()=>setPosition('left')}>left</button>
    </div>
      <Tooltip position={position} />
    </>

  );
};

export default App;
