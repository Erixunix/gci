import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cobros = () => {
  const [cobros, setCobros] = useState([]);
  const [newCobro, setNewCobro] = useState({ amount: '', description: '' });

  useEffect(() => {
    const fetchCobros = async () => {
      const response = await axios.get('/api/cobros');
      setCobros(response.data);
    };
    fetchCobros();
  }, []);

  const handleAddCobro = async () => {
    const response = await axios.post('/api/cobros', newCobro);
    setCobros([...cobros, response.data]);
    setNewCobro({ amount: '', description: '' });
  };

  return (
    <div>
      <h1>Cobros</h1>
      <ul>
        {cobros.map(cobro => (
          <li key={cobro.id}>{cobro.amount} - {cobro.description}</li>
        ))}
      </ul>
      <input
        type="number"
        placeholder="Amount"
        value={newCobro.amount}
        onChange={(e) => setNewCobro({ ...newCobro, amount: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newCobro.description}
        onChange={(e) => setNewCobro({ ...newCobro, description: e.target.value })}
      />
      <button onClick={handleAddCobro}>Add Cobro</button>
    </div>
  );
};

export default Cobros;
