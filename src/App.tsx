import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import Station from "./components/Station";
import ListGroup from "./components/ListGroup";

/* let stations = [
 *   { id: 1, name: 'Station 1' },
 *   { id: 2, name: 'Station 2' },
 *   { id: 3, name: 'Station 3' }
 * ]
 *  */
let stations = [
  "Station1",
  "Station2",
  "Station3"
]

export const WebSocketDemo = () => {
  //Public API that will echo messages sent to it back to the client
  // const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.org');
  const [socketUrl, setSocketUrl] = useState('ws://localhost:8011/ws');
  const [payload, setPayload] = useState([]);

  const { sendMessage, lastJsonMessage, readyState } = useWebSocket(socketUrl);
  useEffect(() => {
    if (lastJsonMessage !== null) {

      const { channels, ...p } = lastJsonMessage;
      setPayload(p);
      console.log(p);
      /* console.log(channels);
       * console.log(payload);             // the entire message
       * console.log(payload.source);      // just the source
       */
      // setMessageHistory((prev) => prev.concat(lastJsonMessage));
      // console.log(payload);
      // setMessageHistory((prev) => prev.concat(payload));
      // setMessageHistory(payload);
    }
  }, [lastJsonMessage, setPayload]);

  const handleClickChangeSocketUrl = useCallback(
    // () => setSocketUrl('wss://demos.kaazing.com/echo'),
    () => setSocketUrl('ws://localhost:8011/ws'),
    []
  );

  const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div>
      <button onClick={handleClickChangeSocketUrl}>
        Click Me to change Socket Url
      </button>

      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
    >
    Click Me to send 'Hello'
      </button>

      <span>The WebSocket is currently {connectionStatus}</span>

      <ul>
        {payload.source} = {payload.device} = {payload.value}
      </ul>
    </div>
  );
};


function App() {

  const handleSelectItem = (station: string) => {
    console.log(station);
    setActiveStation(station);
  }

  const [activeStation, setActiveStation] = useState(-1);

  return (
    <div className="container p-4">
      <div className="row">

        <div className="col-4">
          <ListGroup items={stations} heading="Stations" onSelectItem={handleSelectItem} />
        </div>

        <div className="col">

          <Station station={activeStation} />
          <WebSocketDemo />

        </div>

      </div>
    </div>
  )
}

export default App
