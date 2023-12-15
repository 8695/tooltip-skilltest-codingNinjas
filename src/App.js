
import React from 'react';
import Tooltip from './hover';

const App = () => {
  return (
    <div>
      <Tooltip position="top" text="Thanks for hovering! i am tooltip">
        <button>Hover me </button>
      </Tooltip>
  
    </div>
  );
};

export default App;
