import './popupMenu.css'
import { useDetectClickOutside } from 'react-detect-click-outside';

function PopupMenu({closeDropdown}) {
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  return (
    <div className='popup-container' ref={ref}>
      <ul className='popup-list'>
        <li className='popup-list-item'>
          <p className='popup-option'>Edit</p>
        </li>
        <li className='popup-list-item'>
          <p className='popup-option'>Delete</p>
        </li>
      </ul>
    </div>
  )
}

export default PopupMenu