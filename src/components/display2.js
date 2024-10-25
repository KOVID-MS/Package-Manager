import React from 'react';

const Display2 = ({ senders }) => {
  return (
    <div>
      <h2>Sender List</h2>
      <ul>
        {senders.map((sdr) => (
          <li key={sdr.id}>
            Name-{sdr.sender}<br/>
            Address - {sdr.address}<br/>
            Number - {sdr.Number}<br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display2;
