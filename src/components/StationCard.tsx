function StationCard({ station }) {

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title bg-secondary p-2 text-center fg-white">{station.id}</h5>
          <div className="temp">{station.sensors.tempc}</div>          
          <div className="humidty">humidity: {station.sensors.humidity} %</div>
      </div>
    </div>
  )
}

export default StationCard
