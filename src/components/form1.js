import React, { useState } from 'react';

const Form1 = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address || !item) {
      alert('All fields are mandatory');
      return;
    }

    const newPackage = {
      id: Date.now(),
      name,
      address,
      item,
    };

    onSubmit(newPackage);

    setName('');
    setAddress('');
    setItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name} required
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br />
      <label>
        Item:
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Package</button>
    </form>
  );
};

export default Form1;
