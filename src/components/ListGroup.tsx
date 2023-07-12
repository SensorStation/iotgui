import { useState } from "react";

function ListGroup() {
  let items = [
    'Thermometer',
    'Humidity',
    'GPS',
    'Accelerometer'
  ]

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1) ;

  return (
    <>
      <h1>Sensors</h1>
      {items.length === 0 && <p>No items found</p>}

      <div className="list-group">
        {items.map((item, index) => (
          <a href="#" className={
          selectedIndex === index ?
                'list-group-item active' :
                'list-group-item'
          }
             key={item}
             onClick={ () => { setSelectedIndex(index); }  }
          >
            {item}
          </a> 
        ))}
      </div>
    </>
  );

}

export default ListGroup;
