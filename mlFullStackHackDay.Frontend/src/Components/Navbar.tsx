import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='alex'>
            <h1 className='App-h1'>Sentiment.AI</h1>
            <nav className='navbar'>
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <Link to='/datasets'>Datasets and ML metrics</Link>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;