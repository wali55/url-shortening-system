import { Link } from "react-router-dom";
import { Menu } from "antd";

function Header() {
  return (
    <div>
      <Menu mode="horizontal" className="menu">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="edit">
          <Link to="/edit">Edit</Link>
        </Menu.Item>
        <Menu.Item key="list">
          <Link to="/list">List</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
