
interface Props {
  sensors: [
    {
      tempf: 81,
      humidity: 78
    }
  ]
  station: string

}

function Station({station, sensors} : Props) {

  return (
    <div className="station">
      <h1>Station Detail</h1>
      {station.sensors}
    </div>
  )
}

export default Station
