import { useContext } from 'react';

import StationCard from './StationCard'
import StationsContext from './stations'

function StationDash({ sendJsonMessage }) {

  const stationInfo = useContext(StationsContext);
  const stations = stationInfo.stations;
  const currentStation = stationInfo.currentStation;

  let cardList = new Array();
  for (let idx in stations) {
    cardList = cardList.concat(
      <div className="col-4 p-2" key={idx} >
        <StationCard station={stations[idx]} sendJsonMessage={sendJsonMessage} />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row" >
        {cardList}
      </div>
    </div>
  );

}

export default StationDash
