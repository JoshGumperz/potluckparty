import React, { useEffect, useState } from 'react';
import './bootstrap.min.css';
import './display.css';
import { Table } from 'react-bootstrap';
import PopupMenu from './popupMenu';
import { HiOutlineDotsVertical as Icon } from 'react-icons/hi'

const axios = require('axios');

function Display({ updateSubmitted, submitted }) {
  const [userList, setUserList] = useState([]);
  const [count, setCount] = useState(0)
  const [iconClicked, setIconClicked] = useState(false)

  const closeDropdown = () => {
    if(count >= 1) {
      setIconClicked(false)
    }
    setCount(count + 1)
  }
  
  useEffect(() => {
    if(!iconClicked) {
      setCount(0)
    }
  }, [iconClicked])

  const getUserId = () => {
    return localStorage.getItem('userId');
  }

  const userId = getUserId()

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
        <tbody className='display-table-body'>
          {userList.map((item) => {
            return (
              <tr className={'display-table-row'} key={item._id}>
                <td>{item.name}</td>
                <td>{item.dish.category}</td>
                <td>{item.dish.name}</td>
                {item._id === userId ? <td width={"1%"}><Icon onClick={() => {setIconClicked(!iconClicked)}} className='display-icon'/></td> : null}
                {iconClicked && item._id === userId ?
                  <aside className='display-popup-menu-container'>
                    <PopupMenu closeDropdown={closeDropdown}/>
                  </aside> : null}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Display;
