export default function OverviewMenu() {
  return (
    <div className="flex-row overview">
    <div className="row">
      <div>Overview</div>
      <div><span className="span-icon">👥</span> Clients</div>
      <div><span className="span-icon">📋</span> Products & Services</div>
      <div><span className="span-icon">🧾</span> Invoices</div>
    </div>
    <div>
      <div id="config-btn"><span className="span-icon">🔧</span> Configure</div>
    </div>
  </div>
  )
}