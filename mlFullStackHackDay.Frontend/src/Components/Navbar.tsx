import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div >
            <h1 className='App-h1'>Sentiment.AI</h1>
            <nav className='navbar'>
                <div>
                    <Link to='/'>Single Prediction</Link>
                </div>
                <div>
                    <Link to='/home'>Home</Link>
                </div>
                <div>
                    <Link to='/datasets'>Datasets and ML metrics</Link>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;