import loadGifImage from './img/load.gif';

const LoaderContent: React.FC = ()=> {

    return(
        <div>
            <h1>Carregando...</h1>
            <img src={loadGifImage} alt="Imagem de carregamento da página" />
        </div>
    )

}

export default LoaderContent;