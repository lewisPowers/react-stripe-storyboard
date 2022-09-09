import React from 'react';
import './Content.css';

export default function ImportConfig(props) {
  let panel = document.getElementsByClassName('internal-panel-gray')[0];
  if (props.state === 4) {
    panel.style.backgroundColor = 'white';
    panel.parentElement.style.height = '700px';
  }


  return (
    <>
      <div className="internal-panel-gray" style={{backgroundColor: 'white'}}>
        <div className="stripe-loading">
          <div className="loading"></div>
          <div>
            <h2>Importing Stripe Configurations</h2>
            <p className="gray-text">Please wait while we are importing your Stripe configurations. It will only take a few seconds…</p>
          </div>
        </div>
      </div>
    </>
  )
}