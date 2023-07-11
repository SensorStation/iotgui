function ListGroup() {
  let items = [
    'Spearo Thermometer',
    'Humidity',
    'GPS',
    'Accelerometer'
  ]

  return (
    <>
      <h1>Sensors</h1>
      {items.length === 0 && <p>No items found</p>}

      <div className="list-group">
        {items.map((item, index) => (
          <a href="#" className="list-group-item"
             key={item}
             onClick={(event) => console.log(index, item, event) }>
            {item}
          </a> 
        ))}
      </div>
    </>
  );

}

export default ListGroup;
