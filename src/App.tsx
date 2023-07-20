import { useState } from "react";

import Station from "./components/Station";
import ListGroup from "./components/ListGroup";

function App() {
  let stations = [
    'Station 1',
    'Station 2',
    'Station 3'
  ]

  const handleSelectItem = (station: string) => {
    console.log(station);
    setActiveStation(station);
  }

  const [activeStation, setActiveStation] = useState(-1);

  return (
    <div className="container p-4">
      <div className="row">

        <div className="col">
          <ListGroup items={stations} heading="Stations" onSelectItem={handleSelectItem} />
        </div>

        <div className="col-8">
          <Station station={activeStation} />
        </div>

      </div>
    </div>
  )
}

export default App
