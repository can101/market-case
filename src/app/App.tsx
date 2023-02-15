import React from 'react';
import styles from './app.module.scss';
import { useRoutes } from 'react-router-dom';
import Root from '@routes/root';
import Navbar from '@components/navbar';
import Footer from '@components/footer';

function App(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Navbar />
      {useRoutes(Root)}
      <Footer />
    </div>
  );
}

export default App;
