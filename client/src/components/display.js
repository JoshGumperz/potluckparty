import React, { useEffect, useState } from 'react';
import './bootstrap.min.css';
import './display.css';
import { Table } from 'react-bootstrap';
import PopupMenu from './popupMenu';
import ReactPaginate from 'react-paginate';
import { HiOutlineDotsVertical as Icon } from 'react-icons/hi'

const axios = require('axios');

function Display({ updateSubmitted, submitted }) {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0)
  const [iconClicked, setIconClicked] = useState(false)
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;

  const closeDropdown = () => {
    if (count >= 1) {
      setIconClicked(false)
    }
    setCount(count + 1)
  }

  useEffect(() => {
    if (!iconClicked) {
      setCount(0)
    }
  }, [iconClicked])

  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    if (submitted) {
      setIconClicked(false)
      apiCall();
    }
  }, [submitted]);

  useEffect(() => {
    // Fetch items from another resources.
    itemFunction();

  }, [itemOffset, itemsPerPage]);

  useEffect(() => {
    if (items !== []) {
      itemFunction();
    }
  }, [items])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  const itemFunction = () => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));

  }

  const getUserId = () => {
    return localStorage.getItem('userId');
  }

  const userId = getUserId()

  const apiCall = () => {
    axios.get('/api').then((response) => {
      setItems(response.data);
      if (submitted) {
        updateSubmitted();
      }
    });
  };

  return (
    <div className="display-container">
      <Table striped bordered hover responsive className='display-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>item</th>
          </tr>
        </thead>
        <tbody className='display-table-body'>
          {currentItems && currentItems.map((item) => {
            return (
              <tr className={'display-table-row'} key={item._id}>
                <td>{item.name}</td>
                <td>{item.dish.category}</td>
                <td>{item.dish.name}</td>
                {item._id === userId ? <td width={"1%"}><Icon onClick={() => { setIconClicked(!iconClicked) }} className='display-icon' /></td> : null}
                {iconClicked && item._id === userId ?
                  <aside className='display-popup-menu-container'>
                    <PopupMenu closeDropdown={closeDropdown} updateSubmitted={updateSubmitted} />
                  </aside> : null}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}


export default Display;
