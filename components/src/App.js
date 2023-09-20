import React from 'react';
import Button from './components/Button';
const App = () => {
  return (
    <div>
      <div>
        <Button success rounded outline text="CLick Here"/>
      </div>
      <div>
        <Button danger outline text="Buy Now"/>
      </div>
      <div>
        <Button warning text="See Deal"/>
      </div>
      <div>
        <Button secondary outline text="Hide Adds"/>
      </div>
      <div>
        <Button secondary rounded text="Something!"/>
      </div>
    </div>
  );
}

export default App;
