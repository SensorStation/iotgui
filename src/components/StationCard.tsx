function StationCard({ station }) {

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title bg-secondary p-2 text-center fg-white">{station.id}</h2>
        <div className="temp">{station.devices.tempc}</div>
        <div className="humidty">humidity: {station.devices.humidity} %</div>

      </div>
    </div>
  )
}

export default StationCard
