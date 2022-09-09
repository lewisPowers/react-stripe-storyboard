import './Content.css';
import logo from './assets/stripe-logo.png';
import './StripePopup.css';

function StripeConnect(props) {
    return (
      <div className="internal-panel-gray">
        <div className="stripe-logo">
          <img className="stripe-logo-img" alt="Stripe Logo" src={logo}></img></div>
        <div>
          <h2>Connect Stripe Account</h2>
          <p className="gray-text">Client Billing requires a free Stripe account, connect your existing account or create a new one to get started.</p>
        </div>
        <div className="input-box">
          <div className="padding bold">Transaction Fee</div>
          <div className="padding bold">5%</div>
        </div>
        <div>
          <button className="get-started" state={props.state} onClick={props.onClick}>
            Get Started
          </button>
        </div>
        <div className="learn-more">Find ot more about Client Billing </div>
      </div>
    )

}

export default StripeConnect;

