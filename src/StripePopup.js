export default function StripePopup() {
  return (
    <>
      <div className="stripe-popup row" style={{height: '80px', width: '300px', background: '#E6E6E6'}}>
        <div className="green-check">✔️</div>
        <div id="stripe-message" className={"column flex-start"}>
          <div className={"bold no-line-height flex-start"}>Stripe account connected successfully!</div>
          <div>A SECOND AGO</div>
        </div>
      </div>
    </>
  )
}