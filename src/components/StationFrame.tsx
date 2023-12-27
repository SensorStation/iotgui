import { useState } from 'react';

import StationList from './StationList'
import StationMeta from './StationMeta'
import StationDash from './StationDash'
import StationCard from './StationCard'

let stationData = {
    "sta1": {
      "id": "sta1",
      "devices": { "tempc": 21.1, "humidity": .71, },
      "controls": [ { "relay0": 0 , "relay1": 0, "relay2": 0, "relay3": 0 } ]
    },
    "sta2": {
      "id": "sta2",
      "devices": { "tempc": 22.2, "humidity": .72, },
      "controls": [{ "relay0": 1, "relay1": 1, "relay2": 1, "relay3": 1 }]
    },
    "sta3": {
      "id": "sta3",
      "devices": { "tempc": 23.3, "humidity": .73, },
      "controls": [{ "relay0": 0, "relay1": 1, "relay2": 0, "relay3": 1 }]
    }
};


function updateStations() {
  let stationList = new Array();
  for (let sta in stationData) {
    console.log(sta);
    let station = stationData[sta];
    stationList.push(
      <div className="col-4 p-2" key={sta}>        
        <StationCard station={station} />
      </div>
    );
  }
  return stationList;
}

function StationFrame() {
  const [stations, setStations] = useState(new Array());

  let stationList=updateStations(setStations);

  return (
    <div className="contianer p-4">
      <div className="row">

        <div className="col">
          <StationList />
          <StationMeta />
        </div>

        <div className="col-8">
          <StationDash stations={stationList} />
        </div>
      </div>
    </div>    
  );
}

export default StationFrame
