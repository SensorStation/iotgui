function StationMeta() {
    return (
        <>
            <h2 className="pt-4">Station Details</h2>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">IP  Address: 1.2.3.4</li>
                <li className="list-group-item">MAC Address: 01:02:03:04:05:06</li>
                <li className="list-group-item">Capabilities: Tempc, Humidity, Relay</li>
            </ul>
        </>
    );
}

export default StationMeta