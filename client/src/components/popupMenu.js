import './popupMenu.css'
import { useNavigate } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

function PopupMenu({closeDropdown, updateSubmitted}) {
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  const navigate = useNavigate();
  const getUserId = () => {
    return localStorage.getItem('userId');
  }

  const userId = getUserId()

  const handleDelete = async () => {
    const response = await fetch(`api/${userId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      updateSubmitted();
      localStorage.removeItem('userId');
      console.log(data);
    }
  }

  return (
    <div className='popup-container' ref={ref}>
      <ul className='popup-list'>
        <li className='popup-list-item' onClick={() => {navigate('/edit')}}>
          <p className='popup-option'>Edit</p>
        </li>
        <li className='popup-list-item' onClick={handleDelete}>
          <p className='popup-option'>Delete</p>
        </li>
      </ul>
    </div>
  )
}

export default PopupMenu