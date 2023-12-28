import { useState } from 'react';

import StationMeta from './StationMeta';

function StationList({stations}) {

  let slist = new Array();
  for (let station in stations) {
    slist = slist.concat(
      <a className="list-group-item" key={station}>
        {station}
      </a>
    );
  }

  return (
    <>
      <h2>Station List</h2>
      <div className="list-group">
        {slist}
      </div>

      <div className="station-meta">
        <StationMeta />
      </div>
    </>
  );
}

export default StationList
