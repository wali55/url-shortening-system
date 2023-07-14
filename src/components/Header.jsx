import { Link } from 'react-router-dom';

function Header() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/edit">Edit</Link>
            <Link to="/list">List</Link>
        </div>
    );
}

export default Header;