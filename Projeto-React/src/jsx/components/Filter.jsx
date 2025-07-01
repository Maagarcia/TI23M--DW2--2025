import React from 'react'

const Filter = ({filter, setFilter}) => {

  return (
    <div>
        <h2>Filtro</h2>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Fix">Fixo</option>
            <option value="Variable">Variado</option>
        </select>

    </div>
  )
}

export default Filter