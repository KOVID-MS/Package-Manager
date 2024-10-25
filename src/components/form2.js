import React, { useState } from 'react';

const Form2 = ({ onSubmit }) => {
  const [sender, setSender] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!sender || !address || !number) {
      alert('All fields are mandatory');
      return;
    }

    const newPackage = {
      id: Date.now(),
      sender,
      address,
      number,
    };

    onSubmit(newPackage);

    setSender('');
    setAddress('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Sender Name:
        <input
          type="text"
          value={sender} required
          onChange={(e) => setSender(e.target.value)}
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
        Number:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form2;
