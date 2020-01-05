import React, { useState } from 'react';

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAddTech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul data-testid="tech-list">
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <form  data-testid="tech-form" onSubmit={handleAddTech}>
        <label htmlFor="tech">Tech</label>
        <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)}/>
        <button onClick={handleAddTech}>Adicionar</button>
      </form>
    </>
  );
}
