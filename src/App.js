import React, { useState, useEffect } from 'react';
import Form1 from './components/form1';
import Form2 from './components/form2';
import Display from './components/display';
import Display2 from './components/display2';
import Confirmation from './components/confirmation';
import './App.css';

const App = () => {
  const [packages, setPackages] = useState([]);
  const [senders, setSenders] = useState([]);

  useEffect(() => {
    const mockPackages = [
      { id: 1, name: 'John Doe', address: '123 Main St', item: 'book' },
      { id: 2, name: 'Jane Smith', address: '456 Oak St', item: 'cricket bat' },
    ];

    setPackages(mockPackages);

    const mockSenders = [
      { id: 1, sender: 'John Doe', address: '123 Main St', Number: 9715245845 },
      { id: 2, sender: 'Jane Smith', address: '456 Oak St', Number: 9715245845 },
    ];

    setSenders(mockSenders);
  }, []);

  const handlePackageSubmit = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  const handlePackageSubmit2 = (newSender) => {
    setSenders([...senders, newSender]);
  };

  return (
    <div className="container">
      <h1>Order Details</h1>
      <div className="main-content">
        {/* Left Column: Sender Form and Details */}
        <div className="column">
          <div className="form-container">
            <h2>Sender Form</h2>
            <Form2 onSubmit={handlePackageSubmit2} />
          </div>
          <div className="form-container">
            <h2>Sender Details</h2>
            <Display2 senders={senders} />
          </div>
        </div>

        {/* Right Column: Package Form and Details */}
        <div className="column">
          <div className="form-container">
            <h2>Package Form</h2>
            <Form1 onSubmit={handlePackageSubmit} />
          </div>
          <div className="form-container">
            <h2>Package Details</h2>
            <Display packages={packages} />
          </div>
        </div>
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Confirmation Status</h2>
      <Confirmation />
    </div>
  );
};

export default App;
