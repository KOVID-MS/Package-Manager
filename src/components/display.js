import React from 'react';

const Display = ({ packages }) => {
  return (
    <div>
      <h2>Package List</h2>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg.id}>
            {pkg.name} - {pkg.address} - {pkg.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
