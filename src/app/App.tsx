import React from 'react';
import styles from './app.module.scss';
import { Link, useRoutes } from 'react-router-dom';
import Root from '../router/root';

function App(): React.ReactElement {
  return (
    <div className={styles.bg_dark}>
      <nav>
        <Link to="/">Anasayfa</Link>
        <Link to="/basket">Basket</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      {useRoutes(Root)}
    </div>
  );
}

export default App;
