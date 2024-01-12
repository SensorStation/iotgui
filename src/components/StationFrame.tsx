import { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import StationList from './StationList'
import StationMeta from './StationMeta'
import StationDash from './StationDash'
import StationsContext from './stations'

function StationFrame() {
  const [socketUrl, setSocketUrl] = useState('ws://localhost:8011/ws');
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(socketUrl, {
    shouldReconnect: () => true,
  });
  const [stations, setStations] = useState([]);
  const [currentStation, setCurrentStation] = useState([]);

  useEffect(() => {
    if (lastJsonMessage === null) {
      return;
    }
    if (lastJsonMessage.id === undefined) {
      return;
    }

    let newList = stations;
    newList[lastJsonMessage.id] = lastJsonMessage;
    setStations(newList);
  }, [lastJsonMessage, setStations]);

  return (
    <div className="contianer p-4">
      <div className="row">
        <StationsContext.Provider value={{stations, currentStation}}>
          <div className="col">
            <StationList setCurrentStation={setCurrentStation} />
          </div>

          <div className="col-8">
            <StationDash sendJsonMessage={sendJsonMessage} />
          </div>
        </StationsContext.Provider>
      </div>
    </div>    
  );
}

export default StationFrame
