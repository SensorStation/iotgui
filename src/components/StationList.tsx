import { useContext } from 'react';

import StationsContext from './stations';
import StationMeta from './StationMeta';

function StationList({setCurrentStation}) {

  const stationInfo = useContext(StationsContext);
  const stations = stationInfo.stations;
  const currentStation = stationInfo.currentStation;

  function handleClick(e) {
    e.preventDefault();
    let id = e.target.id;
    let st = stations[e.target.id];
    setCurrentStation(st);
  }

  let slist = new Array();
  for (let station in stations) {
    slist = slist.concat(
      <a href={station} id={station} className="list-group-item list-group-item-action" key={station} onClick={handleClick}>
        {station}
      </a>
    );
  }

  return (
    <>
      <h2>Station List</h2>
      <div className="list-group">
        {slist}
      </div>

      <div className="station-meta">
        <StationMeta station={currentStation} /> 
      </div>
    </>
  );
}

export default StationList
