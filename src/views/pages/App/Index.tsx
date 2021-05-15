import React, { useCallback, useEffect, useState } from 'react';
import api from '../../../services/api';
import LoaderContent from '../../../LoaderContent';
import { Container } from './style'

const App: React.FC = () => {

  const [photo, setPhoto] = useState<string>('')
  const [isLoad, setIsLoad] = useState<boolean>(true)

  useEffect(() => {
    async function getApi() {
      setIsLoad(true)
      let { data } = await api.get('')
      setPhoto(data.message);
      setIsLoad(false)
    }
    getApi()
  }, []);

  const handleSortImage: any = useCallback(async() => { 
    setIsLoad(true);
    let { data } = await api.get('')
    setPhoto(data.message);
    setIsLoad(false)    
  }, [photo])

  return (
    <Container>
      <div className='content'>
        <h1>Hello Gama | Afya</h1>
        <h4>Veja estas imagens</h4>
        <button onClick={handleSortImage}>Clique aqui</button>
      </div>
      {isLoad ? (<LoaderContent />) : (<img src={photo} alt="Foto do cachorro" />) }
    </Container>
  );
}

export default App;