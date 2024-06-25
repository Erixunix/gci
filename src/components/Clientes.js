// Clientes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import NavBar from './NavBar';
//import './Dashboard.css';
import './NavBar.css';

Modal.setAppElement('#root'); // Asegúrate de que esto coincida con el id del elemento raíz en tu HTML

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState({ 
    nombre: '', 
    apellidos: '', 
    curp: '', 
    telefono: '', 
    direccion: '', 
    observacion: '' 
  });
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error('Error fetching clientes:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editing) {
      try {
        await axios.put(`http://localhost:5000/clientes/${currentId}`, form);
        fetchClientes();
        setEditing(false);
        setForm({ nombre: '', apellidos: '', curp: '', telefono: '', direccion: '', observacion: '' });
        setModalIsOpen(false); // Ocultar modal después de editar
      } catch (error) {
        console.error('Error updating cliente:', error);
      }
    } else {
      try {
        await axios.post('http://localhost:5000/clientes', form);
        fetchClientes();
        setForm({ nombre: '', apellidos: '', curp: '', telefono: '', direccion: '', observacion: '' });
        setModalIsOpen(false); // Ocultar modal después de agregar
      } catch (error) {
        console.error('Error creating cliente:', error);
      }
    }
  };

  const handleEdit = (cliente) => {
    setEditing(true);
    setCurrentId(cliente.id);
    setForm({ 
      nombre: cliente.nombre, 
      apellidos: cliente.apellidos, 
      curp: cliente.curp, 
      telefono: cliente.telefono, 
      direccion: cliente.direccion, 
      observacion: cliente.observacion 
    });
    setModalIsOpen(true); // Mostrar modal al editar
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/clientes/${id}`);
      fetchClientes();
    } catch (error) {
      console.error('Error deleting cliente:', error);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
    setEditing(false);
    setForm({ nombre: '', apellidos: '', curp: '', telefono: '', direccion: '', observacion: '' });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <NavBar />
      <div className="dashboard-container">
        <h2>Lista de Contactos/Prospectos/Garantías</h2>
        <div className="header-actions">
          <button className="new-client-button" onClick={openModal}>+ Nuevo</button>
          <button className="export-button">Exportar</button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Formulario de Cliente"
          className="modal"
          overlayClassName="overlay"
        >
          <h2>{editing ? 'Editar Cliente' : 'Nuevo Cliente'}</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <input
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Apellidos"
              value={form.apellidos}
              onChange={(e) => setForm({ ...form, apellidos: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="CURP"
              value={form.curp}
              onChange={(e) => setForm({ ...form, curp: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Dirección"
              value={form.direccion}
              onChange={(e) => setForm({ ...form, direccion: e.target.value })}
              required
            />
            <textarea
              placeholder="Observaciones"
              value={form.observacion}
              onChange={(e) => setForm({ ...form, observacion: e.target.value })}
            />
            <div className="form-actions">
              <button type="submit" className="submit-button">{editing ? 'Actualizar' : 'Agregar'} Cliente</button>
              <button type="button" className="close-button" onClick={closeModal}>Cerrar</button>
            </div>
          </form>
        </Modal>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>N°</th>
                <th>Nombres y Apellidos</th>
                <th>CURP/RFC</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Observación</th>
                <th>Edición</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => (
                <tr key={cliente.id}>
                  <td>{index + 1}</td>
                  <td>{cliente.nombre} {cliente.apellidos}</td>
                  <td>{cliente.curp}</td>
                  <td>{cliente.telefono}</td>
                  <td>{cliente.direccion}</td>
                  <td>{cliente.observacion}</td>
                  <td>
                    <button className="edit-button" onClick={() => handleEdit(cliente)}>Editar</button>
                    <button className="delete-button" onClick={() => handleDelete(cliente.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <span>Mostrando del 1 al 10 de {clientes.length} registros</span>
            <div className="pagination-controls">
              <button className="pagination-button">1</button>
              <button className="pagination-button">2</button>
              <button className="pagination-button">3</button>
              {/* Añade más botones de paginación según sea necesario */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
