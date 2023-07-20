interface Props {
  station: string
  
}

function Station({station} : Props) {

  return (
    <div className="station">
      <h1>Station Detail</h1>
      {station}
    </div>
  )
}

export default Station
