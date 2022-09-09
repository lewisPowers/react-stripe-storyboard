import logo from './assets/stripe-logo.png';

export default function Connected(props) {

  return (
    <div className="internal-panel-gray">
      <div className="stripe-logo">
        <img className="stripe-logo-img" alt="Stripe Logo" src={logo}></img></div>
      <div>
        <h2>Connect Stripe Account</h2>
        {/* <p className="gray-text">Client Billing requires a free Stripe account, connect your existing account or create a new one to get started.</p> */}
      </div>
      <div className="input-box">
        <div className="connected-left column flex-start">
          <div className="padding bold">(name) Stripe Account</div>
          <div className="padding">(email)</div>
        </div>
        <div className="padding bold">Connected ✅</div>
      </div>
      <div>
        <button className="get-started" state={props.state} onClick={props.onClick}>
          Continue
        </button>
      </div>
      {/* <div className="learn-more">Find ot more about Client Billing </div> */}
    </div>

  )
}