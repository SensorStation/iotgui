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

  function handleClick(e) {
    e.preventDefault();
    let id = e.target.id;
    let stationid = e.target.getAttribute("stationid");
    let relayid = e.target.getAttribute("relayid")

    let on = true;
    let onChecked = "checked";
    let offChecked = "";
    if (id == "off") {
      on = false;
      onChecked = undefined;
      offChecked = "checked";
    }
    sendJsonMessage({ "type": "relay", "device": relayid, "stationid": stationid, "value": on });
  }

  function handleChange(e) {}

  return (
    <>
      <h5 className="btn label">{idx}</h5>
      <input
        id="on"
        relayid={idx}
        stationid={stationid}
        type="radio"
        className="btn-check"
        name="btnonoff"
        autoComplete="off"
        onClick={handleClick}
        onChange ={handleChange}
        ischecked={onChecked}
      />
      <label className="btn btn-outline-primary" htmlFor="on">On</label>

      <input
        id="off"
        relayid={idx}
        stationid={stationid}
        type="radio"
        className="btn-check"
        name="btnonoff"
        autoComplete="off"
        onClick={handleClick}
        onChange={handleChange}
        checked={offChecked}
      />
      <label className="btn btn-outline-primary" htmlFor="off">Off</label>

    </>
  )
}

export default StationRelays
