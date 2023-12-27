import { useState } from 'react';

function StationList() {

  const [stations, setStations] = useState(
    ["sta1", "sta2", "sta3", "sta4"]
  );
  
  const stationsList = stations.map(station => 
    <a className="list-group-item" key={station}>
      {station}
    </a>
  );

  return (
    <>
      <h2>Station List</h2>
      <div className="list-group">
        {stationsList}
      </div>
    </>
  );
}

export default StationList
