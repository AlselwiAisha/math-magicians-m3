import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { path: '/', name: 'Home' },
    { path: '/Calculator', name: 'Calculator' },
    { path: '/Quote', name: 'Quote' },
  ];

  return (
    <nav className="nav">
      <h2>
        Math Magicians
      </h2>
      <ul>
        {
        links.map((link) => (
          <li key={link.name} className="link">
            <NavLink className="navLink" to={link.path}>{link.name}</NavLink>
          </li>
        ))
       }
      </ul>
    </nav>
  );
};
export default NavBar;
