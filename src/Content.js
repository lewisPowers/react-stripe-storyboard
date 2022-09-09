import StripeConnect from './StripeConnect.js';
import StripePopup from './StripePopup.js';
import BillingCurrency from './BillingCurrency.js';
import ImportConfig from './ImportConfig.js';
import Steps from './Steps.js';
import Connected from './Connected.js'
import './Content.css';

function Content(props) {

  let state = props.state;

  let popup;
  let content;
  if (state < 3) {
    content = <StripeConnect state={state} onClick={props.onClick} />
  }
  if (state === 3 || state === 4) {
    popup = state === 4 ? null : <StripePopup />
    content = <BillingCurrency state={state} onClick={props.onClick} backClick={props.backClick} />
  }
  if (state === 5) {
    content = (
      <>
        <ImportConfig state={state} onClick={props.onClick} advanceState={props.advanceState} />
      </>
    )
  }
  if (state === 6) {
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
        <div className="internal-panel-gray">
          {/* <StripeConnect state={state} onClick={props.onClick} /> */}
          {content}
          {popup}
        </div>
      </div>
    </div>
  )
}

export default Content;