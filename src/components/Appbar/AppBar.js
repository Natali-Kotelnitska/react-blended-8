import { NavLink } from 'react-router-dom';
import styles from './Appbar.module.css';

export const AppBar = () => {
  return (
    <nav>
      <ul>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles['active-link'] : styles['link']
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles['active-link'] : styles['link']
          }
          to="at"
        >
          Add Contact
        </NavLink>
      </ul>
    </nav>
  );
};
