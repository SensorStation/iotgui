function StationRelays( { station, sendJsonMessage } ) {

  const relays = [];
  for (let idx in station.relays) {
    let val = station.relays[idx];
    relays.push(
      <Relay id={idx} key={idx} idx={idx} stationid={station.id} value={val} sendJsonMessage={sendJsonMessage} />
    );
  }

  return (
    <>
      <div className="btn-group m-2" role="group" aria-label="Basic radio toggle button group">
        {relays}
      </div>
    </>
  )
}

function Relay({ idx, stationid, sendJsonMessage }) {

  let onChecked="checked";
  let offChecked="checked";

  function handleChange(e) {}

  function handleClick(e) {
    e.preventDefault();
    let id = e.target.id;
    let stationid = e.target.getAttribute("stationid");
    let relayid = e.target.getAttribute("relayid");
    let name = e.target.name;
    let onChecked = "checked";
    let offChecked = "";
    if (name == "off") {
      onChecked = undefined;
      offChecked = "checked";
    }
    console.log("Send station: ", stationid, "-", relayid, " - ", name);
    sendJsonMessage({ "type": "relay", "device": relayid, "stationid": stationid, "value": name });
  }
  let onidx = idx+"-on"
  let offidx = idx+"-off"

  return (
    <>
      <h5 className="btn label">{idx}</h5>
      <input
        id={onidx}
        relayid={idx}
        stationid={stationid}
        type="radio"
        className="on btn-check"
        name="on"
        autoComplete="on"
        onClick={handleClick}
        onChange ={handleChange}
        ischecked={onChecked}
      />
      <label className="btn btn-outline-primary" htmlFor={onidx}>On</label>

      <input
        id={offidx}
        relayid={idx}
        stationid={stationid}
        type="radio"
        className="off btn-check"
        name="off"
        autoComplete="off"
        onClick={handleClick}
        onChange={handleChange}
        checked={offChecked}
      />
      <label className="btn btn-outline-primary" htmlFor={offidx}>Off</label>
    </>
  )
}

export default StationRelays
