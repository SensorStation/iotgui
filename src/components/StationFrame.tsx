import { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import StationList from './StationList'
import StationMeta from './StationMeta'
import StationDash from './StationDash'

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
  const [socketUrl, setSocketUrl] = useState('ws://localhost:8011/ws');
  const { sendMessage, lastJsonMessage, readyState } = useWebSocket(socketUrl);
  const [stationList, setStationList] = useState([]);

  useEffect(() => {
    if (lastJsonMessage !== null) {
      setStationList([lastJsonMessage]);
    }
  }, [lastJsonMessage, setStationList]);

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
