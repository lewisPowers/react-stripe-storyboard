export default function Steps(props) {

  let lightColor = '#AAAAAA';
  let step = props.state < 3 ? 1 : 2;

  if (step < 3) {
    return (
      <div className="setup-content">
        <div className="steps">Step {step} of 2</div>
        <div className="dot left">•</div>
        <div className="dot right" style={{color: lightColor}}>•</div>
      </div>
    )
  } else {
    return (
      <div className="setup-content">
        <div className="steps">Step {step} of 2</div>
        <div className="dot left" style={{color: lightColor}}>•</div>
        <div className="dot right">•</div>
      </div>
    )
  }
}