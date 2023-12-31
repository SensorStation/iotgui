function StationMeta({ station }) {

  if (station.length == 0) {
    return (<></>);
  }

  let sensors = Object.keys(station.sensors).join(', ');
  let dstring = new Date(station["last-heard"]).toString();

  return (
    <>
      <h2 className="pt-4">Station Details</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{station.id}</li>
        <li className="list-group-item">Last: {dstring}</li>
        <li className="list-group-item">{sensors}</li>
      </ul>
    </>
  );

}

export default StationMeta
