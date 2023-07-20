interface Props {
  id: string,
  value: float
}

function Sensor({sensor, value} : Props) {

  return (
    <div className="sensor">
      <h1>Sensor Detail</h1>
      {sensor} : {value}
    </div>
  )
}

export default Sensor
