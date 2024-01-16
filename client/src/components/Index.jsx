import '../css/index.css';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className='container-Index'>
            <div>
                <h1>Bienvenid@ a CountryApp</h1>
            </div>
            <div>
                <Link to="/Home"><button>Ingresar</button></Link>
            </div>

        </div>
    )
}

export default Index;