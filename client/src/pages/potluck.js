import React, { useState } from 'react';
import Display from '../components/display';
import Form from '../components/form';

function Potluck() {
  const [submitted, setSubmitted] = useState(false);

  const updateSubmitted = () => {
    setSubmitted(!submitted);
  };

  return (
    <div className='potluck-container'>
      <Form updateSubmitted={updateSubmitted} />
      <Display updateSubmitted={updateSubmitted} submitted={submitted} />
    </div>
  );
}

export default Potluck;
