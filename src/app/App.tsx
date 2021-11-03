import React from 'react';
import styles from './App.module.css';
import Registration from './components/Title/Registration/Registration';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <Title text="Bergfest" />
        <Registration />
      </div>
    </main>
  );
}

export default App;
