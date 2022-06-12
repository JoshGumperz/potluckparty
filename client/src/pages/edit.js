import React from 'react'
import Form from '../components/form'
import './edit.css'

function Edit({updateSubmitted}) {
  return (
    <div className='edit-container'>
        <div className='edit-form-container'>
            <Form updateSubmitted={updateSubmitted} postOrPut={'put'}/>
        </div>
    </div>
  )
}

export default Edit