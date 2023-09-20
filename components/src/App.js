import React from 'react';
import { BsFillBellFill, BsFillCursorFill, BsFillDatabaseFill } from "react-icons/bs";
import Button from './components/Button';

const App = () => {
  const handleClick = () => {
    console.log("clicked")
  }
  return (
    <div>
      <div>
        <Button secondary outline rounded className="mb-5" onClick={handleClick}>
          <BsFillBellFill />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
        <BsFillCursorFill />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning rounded>
         <BsFillDatabaseFill />
          See Deal
        </Button>
      </div>
      <div>
        <Button secondary outline>
          
          Hide ads
        </Button>
      </div>
      <div>
        <Button primary rounded>Something</Button>
      </div>
    </div>
  );
}

export default App;
