import React, { useEffect, useState } from 'react';
import './bootstrap.min.css';
import './display.css';
import { Table } from 'react-bootstrap';
const axios = require('axios');

function Display({ updateSubmitted, submitted }) {
  const [userList, setUserList] = useState([]);

  const apiCall = () => {
    axios.get('/api').then((response) => {
      setUserList(response.data);
      if (submitted) {
        updateSubmitted();
      }
    });
  };

  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    if (submitted) {
      apiCall();
    }
  }, [submitted]);
  return (
    <div className='display-table-container'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Item Type</th>
            <th>item</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.dish.category}</td>
                <td>{item.dish.name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Display;
