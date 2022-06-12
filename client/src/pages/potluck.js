import React, { useState } from 'react';
import Display from '../components/display';
import Form from '../components/form';
import './potluck.css'

function Potluck() {
  const [submitted, setSubmitted] = useState(false);

  const updateSubmitted = () => {
    setSubmitted(!submitted);
  };

  return (
    <div className='potluck-container'>
      <div className='potluck-form-container'>
        <Form updateSubmitted={updateSubmitted} />
      </div>
      <div className='potluck-display-container'>
        <Display updateSubmitted={updateSubmitted} submitted={submitted} />
      </div>
    </div>
  );
}

export default Potluck;
