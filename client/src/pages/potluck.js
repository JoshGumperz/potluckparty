import React, { useState } from 'react';
import Display from '../components/display';
import Form from '../components/form';
import './potluck.css'

function Potluck({ updateSubmitted, submitted }) {
  return (
    <div>
      <div className='potluck-header-container'>
        <h6 className="header-potluck">Date: July 9, 2022 Location: Lake Elizabeth 1 Sailway Dr, Fremont, CA 94538 Time: Noon</h6>
      </div>
      <div className='potluck-container'>
        <div className='potluck-form-container'>
          <Form updateSubmitted={updateSubmitted} postOrPut={'post'} />
        </div>
        <div className='potluck-display-container'>
          <Display updateSubmitted={updateSubmitted} submitted={submitted} />
        </div>
      </div>
    </div>
  );
}


export default Potluck;
