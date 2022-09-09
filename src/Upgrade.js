import React from 'react';
import './Upgrade.css';
import megaphone from './assets/megaphone.png';

function Upgrade(props) {
  return (
    <>
      <div className="upgrade hidden">
        <div className="icon-div">
          <div className="icon">
            <img className="megaphone-pic" src={megaphone} alt="megaphone"></img>
          </div>
        </div>
        <div className="upgrade-text">
          <div className="bold">Upgrade to pay 0% transaction fee</div>
          <div>Pay 0% transaction fee and get added benefits by upgrading your account.</div>
        </div>
        <div className="upgrade-btn">
          <button onClick={props.onClick}>Upgrade</button>
        </div>
      </div>
    </>
  )
}

export default Upgrade;