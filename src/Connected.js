import logo from './assets/stripe-logo.png';

export default function Connected(props) {
  return (
    <div className="internal-panel-gray">
      <div className="stripe-logo">
        <img className="stripe-logo-img" alt="Stripe Logo" src={logo}></img></div>
      <div>
        <h2>Connect Stripe Account</h2>
        </div>
      <div className="input-box">
        <div className="connected-left column flex-start">
          <div className="padding bold">(name) Stripe Account</div>
          <div className="padding">(email)</div>
        </div>
        <div className="connected-right padding bold">Connected ✅</div>
      </div>
      <div>
        <button className="get-started" state={props.state} onClick={props.onClick}>
          Continue
        </button>
      </div>
    </div>
  )
}