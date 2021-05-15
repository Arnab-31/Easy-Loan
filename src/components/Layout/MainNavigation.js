import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Easy Loan</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          <li>
            <Link to='/loans'>Loans</Link>
          </li>
          <li>
            <Link to='/profile'><button>Apply for Loan</button></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
