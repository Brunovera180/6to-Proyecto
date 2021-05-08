import React, {useState} from 'react';

const  useSelect = (stateInicial, opciones) => {

  // State del custom hooks
  const [ state, actulizarState ] = useState(stateInicial);

  const SelectNoticias= () => (
    <select
        className="browser-default"
        value={state}
        onChange={e => actulizarState(e.target.value)}
    >
        {opciones.map(opcion => (
            <option key={opcion.value} value={opcion.value}> {opcion.label} </option>
        ))}
    </select>
  );

  return [state, SelectNoticias];
}

export default useSelect;
