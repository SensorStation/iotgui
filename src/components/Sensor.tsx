interface Props {
  id: string,
  value: float
}

function Sensor({id, value} : Props) {

  return (
    <div className="sensor">
      <h1>Sensor Detail</h1>
      {id} : {value}
    </div>
  )
}

export default Sensor
