import StripeConnect from './StripeConnect.js';
import StripePopup from './StripePopup.js';
import BillingCurrency from './BillingCurrency.js';
import ImportConfig from './ImportConfig.js';
import Steps from './Steps.js';
import Connected from './Connected.js'
import './Content.css';

function Content(props) {

  let state = props.state;
  let content;
  if (state < 3) {
    content = <StripeConnect state={state} onClick={props.onClick} />
  }
  if (state === 3) {
    content = (
      <>
        <BillingCurrency state={state} onClick={props.onClick} backClick={props.backClick} />
        <StripePopup />
      </>
    )
  }
  if (state === 4) {
    content = (
      <>
        <ImportConfig state={state} onClick={props.onClick} advanceState={props.advanceState} />
      </>
    )
  }
  if (state === 5) {
    content = (
      <>
        <Connected state={state} onClick={props.onClick} />
      </>
    )
  }

  return (
    <div className="stripe-connect">
      <div className="internal-panel">
        <div className="setup-menu">
          <div className="setup-content">
            <div className="getting-started">Getting Started</div>
          </div>
          <Steps state={state}/>
        </div>
        {content}
      </div>
    </div>
  )
}

export default Content;