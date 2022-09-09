import BackButton from './BackButton.js';
import './Content.css';

function BillingCurrency(props) {
  function CheckButtonComponent(props) {
    function enableBtn() {
      let checkbox = document.getElementsByClassName('checkbox')[0];
      let continueBtn = document.getElementsByClassName('continue-btn')[0];
      console.log(continueBtn)
      if (checkbox.checked) {
        continueBtn.classList.remove('disabled');
        // continueBtn.disabled = false;
      }
      if (!checkbox.checked) {
        continueBtn.classList.add('disabled');
        // continueBtn.disabled = true;
      }
    }
    return (
      <>
        <div className="check-currency">
          <input onClick={enableBtn} type="checkbox" className="checkbox" style={{zIndex: '4'}}></input>
          I am aware that I cannot change currency later
        </div>
        <div>
          <button className="continue-btn disabled"  state={props.state} onClick={props.onClick} >
            Continue
          </button>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="internal-panel-gray" style={{height: '560px'}}>
        <div className="click-back-section">
          <BackButton state={props.state} backClick={props.backClick} />
        </div>
        <div>
          <h2>Choose Billing Currency</h2>
          <p className="gray-text">Select the currency you want to use to bill your clients.</p>
        </div>
        <div className="notebox">
          <div className='alert-icon'></div>
          <div className='notebox-note'>
            ⚠️ Note: Billing currency cannot be changed in the future. Please make sure you select the correct currency.
          </div>
        </div>

        <div className="input-box">
          <div className="padding font-400">USD - United States Dollars</div>
          <div className="padding font-400">⌄</div>
        </div>
        <CheckButtonComponent state={props.state} onClick={props.onClick} />
       </div>
    </>
  )
}

export default BillingCurrency;