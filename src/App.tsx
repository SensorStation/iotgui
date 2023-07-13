import Alert from ".//components/Alert";
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
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col">
          <ListGroup items={items} heading="Sensors" onSelectItem={handleSelectItem} />
        </div>
        <div className="col-8">
          <Alert>
            <h4>Hello, world!</h4>
          </Alert>
        </div>
      </div>
    </div>
  )
}

export default App
