import StationCard from './StationCard'

function StationDash({ stations }) {

  const cardList = stations.map(station => 
    <div className="col-4 p-2" key={station.id} >
      <StationCard station={station} />
    </div>
  );

  return (
    <div className="container">
      <div className="row" >
        {cardList}
      </div>
    </div>
  );

}

export default StationDash
