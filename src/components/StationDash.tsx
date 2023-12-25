import StationCard from './StationCard'

let stationData = [
  { "id": "sta1", "device": "tempc", "value": 72.8 },
  { "id": "sta1", "device": "humidity", "value": 80.2 },
  { "id": "sta2", "device": "tempc", "value": 77.4 },
  { "id": "sta2", "device": "humidity", "value": 87.2 },
  { "id": "sta3", "device": "tempc", "value": 77.4 },
  { "id": "sta3", "device": "humidity", "value": 87.2 },
  { "id": "sta4", "device": "tempc", "value": 77.4 },
  { "id": "sta4", "device": "humidity", "value": 87.2 },
];

function StationDash() {

  const stations = new Array();

  stationData.map((datum) => {

    if (! (datum.id in stations)) {
      stations[datum.id] = new Array();
      stations[datum.id].devices = new Array();
      stations[datum.id].id = datum.id;
    }
    stations[datum.id].devices[datum.device] = datum.value;

  });

  const stationList = new Array();
  for (let sta in stations) {
    let station = stations[sta];
    stationList.push(
      <div className="col-4 p-2" key={station.id}>
        <StationCard station={station} />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {stationList}
      </div>
    </div>
  );
}

export default StationDash
