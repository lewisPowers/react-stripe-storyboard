export default function OverviewMenu() {
  return (
    <div className="flex-row overview">
    <div className="row">
      <div>Overview</div>
      <div><span className="span-icon">๐ฅ</span> Clients</div>
      <div><span className="span-icon">๐</span> Products & Services</div>
      <div><span className="span-icon">๐งพ</span> Invoices</div>
    </div>
    <div>
      <div id="config-btn"><span className="span-icon">๐ง</span> Configure</div>
    </div>
  </div>
  )
}