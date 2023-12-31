function StationMeta({ station }) {

  if (station.length == 0) {
    return (<></>);
  }

  let sensors = Object.keys(station.sensors).join(', ');
  let relays  = Object.keys(station.relays).join(', ');
  let dstring = new Date(station["last-heard"]).toString();

  console.log(Object.keys(station.relays).join(', '));

  return (
    <>
      <h2 className="pt-4 m-4">Station Details</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h6>Station ID</h6>
          {station.id}
        </li>
        <li className="list-group-item">
          <h6>Last Heard</h6>
          {dstring}
        </li>
        <li className="list-group-item">
          <h6>Sensors</h6>
          {sensors}
        </li>
        <li className="list-group-item">
          <h6>Relays</h6>
          {relays}
        </li>
      </ul>
    </>
  );

}

export default StationMeta
