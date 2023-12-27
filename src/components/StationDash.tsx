import { useState } from 'react';

function StationDash({ stations }) {
  return (
    <div className="container">
      <div className="row">
        {stations}
      </div>
    </div>
  );

}

export default StationDash
