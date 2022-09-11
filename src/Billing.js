import React from 'react';
import './Content.css';
import Upgrade from './Upgrade.js';
import OverviewMenu from './OverviewMenu.js';

function Billing(props) {

  let content = (
    <>
        <div className="billing-menu">
          <div className="billing-content">
            <div className="client-billing">
              Client Billing
              <span className="billing-text"> –  A full payment solution for your business, free with company</span></div>
          </div>

          <div className="setup-content">
            <div className="steps">Docs</div>
            <div className="dot click" state={props.state} onClick={props.onClick}></div>

          </div>
        </div>
        <div className="baseline"></div>
      </>
  )
  if (props.state === 1) {
    return (
      <>
        {content}
      </>
    )
  }
  if (props.state === 2) {
    return (
      <>
        {content}
        <Upgrade state={props.state} onClick={props.onClick} />
      </>
    )
  }
  if (props.state === 4) {
    return (
      <>
        {content}
        <OverviewMenu />
      </>
    )
  }
  if (props.state > 2) {
    document.getElementsByClassName('billing-text')[0].style.display = 'none';
    return (
      <>
        {content}
      </>
    )
  }
}

export default Billing;