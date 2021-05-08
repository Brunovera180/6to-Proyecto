import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

  const OPCIONES = [
      { value:'general', label:'General'},
      { value:'business', label:'Negocios'},
      { value:'entertainment', label:'Entretenimiento'},
      { value:'health', label:'Salud'},
      { value:'science', label:'Ciencia'},
      { value:'sports', label:'Deportes'},
      { value:'technology', label:'Tecnologia'},
  ]

  // Utilizar custom hooks
  const [ categoria, SelectNoticias] = useSelect('general', OPCIONES);

  // Submit al form, pasa categira al App.js
  const buscarNoticas = e =>{
      e.preventDefault();

      guardarCategoria(categoria);
  }


  return (
      <div className={`${styles.buscador} row`}>
          <div className="col s12 m8 offset-m2">
              <form
                onSubmit={buscarNoticas}
              >
                  <h2 className={styles.heading}> Encunetra Noticas por categoria</h2>

                  <SelectNoticias />

                  <div className="input-field col s12">
                      <input
                          type="submit"
                          className={`${styles.btn_block} btn-large amber darken-2`}
                          value="Buscar"
                      />
                  </div>
              </form>
          </div>
      </div>
  );
}

export default Formulario;
