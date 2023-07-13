import { useState } from "react";

interface Props{
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading }: Props) {

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1) ;

  return (
    <>
      <h1>{heading}</h1>
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
