function StationCard({ station }) {

  let temp = 0;
  let ttype = "";
  if (station.sensors.tempf) {
    temp = station.sensors.tempf;
    ttype = "f";
  } else {
    temp = station.sensors.tempc;
    ttype = "c";
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title bg-secondary p-2 text-center fg-white">{station.id}</h5>
        <div className="text-right"><span className="temp">{temp}</span>  <span className="temp-type">{ttype}</span> </div>          
        <div className="humidty">humidity: {station.sensors.humidity} %</div>
      </div>
    </div>
  )
}

export default StationCard
