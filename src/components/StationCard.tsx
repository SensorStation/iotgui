function StationCard({ station, currentStation, sendJsonMessage }) {

  function handleClick(e) {
    e.preventDefault();
    let id = e.target.id;
    let stationid = e.target.getAttribute("stationid");
    let relayid = e.target.getAttribute("relayid")

    let on = true;
    if (id == "off") {
      on = false;
    }
    sendJsonMessage({ "type": "relay", "device": relayid, "stationid": stationid, "value": on });
  }

  function handleChange(e) {
    e.preventDefault();
  }

  let temp = 0;
  let ttype = "";
  if (station.sensors.tempf) {
    temp = station.sensors.tempf;
    ttype = "f";
  } else {
    temp = station.sensors.tempc;
    ttype = "c";
  }

  const relays = [];
  for (let idx in station.relays) {
    let on = station.relays[idx];
    let cls = "btn btn-secondary m-3";
    if (on) {
      cls = "btn btn-primary m-3";
    }

    relays.push(
      <div key={idx}>
        <span className="label">{idx}</span>
        <input
          id="on"
          relayid={idx}
          stationid={station.id}
          type="radio"
          className="btn-check"
          name="btnonoff"
          autoComplete="off"
          onClick={handleClick}
          onChange={handleChange}
          checked
        />
        <label className="btn btn-outline-primary" htmlFor="on">On</label>

        <input
          id="off"
          relayid={idx}
          stationid={station.id}
          type="radio"
          className="btn-check"
          name="btnonoff"
          autoComplete="off"
          onClick={handleClick}
          onChange={handleChange}
        />
        <label className="btn btn-outline-primary" htmlFor="off">Off</label>
        
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title bg-secondary p-2 text-center fg-white">{station.id}</h5>
        <div className="text-right"><span className="temp">{temp}</span>  <span className="temp-type">{ttype}</span> </div>
        <div className="humidty">humidity: {station.sensors.humidity} %</div>

        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          {relays}
        </div>

      </div>
    </div>
  )
}

export default StationCard
