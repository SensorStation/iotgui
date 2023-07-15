import { useState } from "react";

import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    'Thermometer',
    'Humidity',
    'GPS',
    'Accelerometer'
  ]

  const handleSelectItem = (item: string) => {
    console.log(item);
    setActiveSensor(item);
  }

  const [activeSensor, setActiveSensor]    = useState(-1);
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="container p-4">
      <div className="row">

        <div className="col">
          <ListGroup items={items} heading="Sensors" onSelectItem={handleSelectItem} />
        </div>

        <div className="col-8">
          <h1>Sensor Details</h1>
          {
            alertVisible &&
            <Alert onClose={() => setAlertVisibility(false)}>
              {activeSensor}
            </Alert>
          }
          <Button color="secondary" onClick={() => setAlertVisibility(true)}>
            Press Me
          </Button>
        </div>

      </div>
    </div>
  )
}

export default App
