import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className='navbar'>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/datasets'>Datasets and ML metrics</Link>
            </div>

        </nav>
    );
}

export default Navbar;