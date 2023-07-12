import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    'Thermometer',
    'Humidity',
    'GPS',
    'Accelerometer'
  ]

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col"></div>
        <div className="col-8">
          <ListGroup items={items} heading="Sensors" />
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default App
