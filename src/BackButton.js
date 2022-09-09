export default function BackButton(props) {
  return (
    <>
      <div className="back-btn" onClick={props.backClick}>↩</div>
      <div>Back</div>
    </>
  )
}