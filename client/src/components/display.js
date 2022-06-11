import React, { useEffect, useState } from 'react';
import './bootstrap.min.css';
import { Table } from 'react-bootstrap';
const axios = require('axios');

function Display({ updateSubmitted, submitted }) {
  const [userList, setUserList] = useState([]);

  const apiCall = () => {
    axios.get('/api').then((response) => {
      setUserList(response.data);
      updateSubmitted();
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
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Dish Type</th>
            <th>Dish</th>
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
