import { Link } from 'react-router-dom';

function Header() {
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/edit">Edit</Link></li>
                <li><Link to="/list">List</Link></li>
            </ul>
        </div>
    );
}

export default Header;