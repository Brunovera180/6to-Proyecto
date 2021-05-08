import React, {Fragment, useState , useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import PropTypes from 'prop-types';

function App() {

  // Definir las categirias y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=cc3df7f9dd2f45a69b89c84cdf06e771`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarApi();
  }, [categoria]);

  return (
      <Fragment>
          <Header
            titulo='Buscador de Noticias'
          />

          <div className='container white'>
              <Formulario
                guardarCategoria={guardarCategoria}
              />

              <ListadoNoticias
                  noticias={noticias}
              />
          </div>
      </Fragment>
  );
}


Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default App;
