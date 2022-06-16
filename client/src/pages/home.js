import './home.css';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  return (
    <div className='flyer-box'>
      <div className='black-overlay'/>
        <div className='flyer-content-container'>
          <h1 className="header-flyer">Alumni Potluck Party!</h1>
          <div className='flyer-info'>
            <p>Date: July 9, 2022</p>
            <p>Location: Lake Elizabeth 1 Sailway Dr, Fremont, CA 94538</p>
            <p>Time: Noon</p>
          </div>
          <button
            className='button-attending'
            onClick={() => {
              navigate('/attending');
            }}
          >
            Learn More
          </button>
        </div>
    </div>
  );
}

export default Home;
