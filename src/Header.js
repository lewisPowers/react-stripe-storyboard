import './Header.css';
import Billing from './Billing.js';

function Header(props) {
  let state = props.state

  return (
    <div className="Header">
      <Billing state={state} onClick={props.onClick} />
    </div>
  )
}

export default Header;