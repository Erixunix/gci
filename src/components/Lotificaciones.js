import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lotificaciones = () => {
  const [lotificaciones, setLotificaciones] = useState([]);
  const [newLotificacion, setNewLotificacion] = useState({ name: '', description: '' });

  useEffect(() => {
    const fetchLotificaciones = async () => {
      const response = await axios.get('/api/lotificaciones');
      setLotificaciones(response.data);
    };
    fetchLotificaciones();
  }, []);

  const handleAddLotificacion = async () => {
    const response = await axios.post('/api/lotificaciones', newLotificacion);
    setLotificaciones([...lotificaciones, response.data]);
    setNewLotificacion({ name: '', description: '' });
  };

  return (
    <div>
      <h1>Lotificaciones</h1>
      <ul>
        {lotificaciones.map(lotificacion => (
          <li key={lotificacion.id}>{lotificacion.name} - {lotificacion.description}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Name"
        value={newLotificacion.name}
        onChange={(e) => setNewLotificacion({ ...newLotificacion, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newLotificacion.description}
        onChange={(e) => setNewLotificacion({ ...newLotificacion, description: e.target.value })}
      />
      <button onClick={handleAddLotificacion}>Add Lotificacion</button>
    </div>
  );
};

export default Lotificaciones;
