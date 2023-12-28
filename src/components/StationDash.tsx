import StationCard from './StationCard'

function StationDash({ stations }) {

  let cardList = new Array();
  for (let idx in stations) {
    cardList = cardList.concat(
      <div className="col-4 p-2" key={idx} >
        <StationCard station={stations[idx]} />
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
