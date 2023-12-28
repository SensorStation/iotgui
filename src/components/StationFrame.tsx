import { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import StationList from './StationList'
import StationMeta from './StationMeta'
import StationDash from './StationDash'

function StationFrame() {
  const [socketUrl, setSocketUrl] = useState('ws://localhost:8011/ws');
  const { sendMessage, lastJsonMessage, readyState } = useWebSocket(socketUrl);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    if (lastJsonMessage === null) {
      return;
    }

    let newList = stations;
    newList[lastJsonMessage.id] = lastJsonMessage;
    setStations(newList);
  }, [lastJsonMessage, setStations]);

  return (
    <div className="contianer p-4">
      <div className="row">

        <div className="col">
          <StationList stations={stations} />
        </div>

        <div className="col-8">
          <StationDash stations={stations} />          
        </div>
      </div>
    </div>    
  );
}

export default StationFrame
