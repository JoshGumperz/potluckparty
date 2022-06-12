import React, { useState } from 'react';
import Display from '../components/display';
import Form from '../components/form';
import './potluck.css'

function Potluck({ updateSubmitted, submitted }) {
  return (
    <div className='potluck-container'>
      <div className='potluck-form-container'>
        <Form updateSubmitted={updateSubmitted} postOrPut={'post'}/>
      </div>
      <div className='potluck-display-container'>
        <Display updateSubmitted={updateSubmitted} submitted={submitted} />
      </div>
    </div>
  );
}

export default Potluck;
