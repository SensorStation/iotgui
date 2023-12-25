function StationList() {

    const stations = [
        'Station 1',
        'Station 2',
        'Station 3',
    ];

    const stationsList = stations.map(station => 
        <a className="list-group-item" key={station}>
            {station}
        </a>
    );

    return (
        <>
            <h2>Station List</h2>
            <div className="list-group">
                {stationsList}
            </div>
        </>
    );
}

export default StationList