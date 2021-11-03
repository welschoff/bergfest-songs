import React from 'react';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Bergfest</h1>
        <form className={styles.form}>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="submit" className={styles.submit} />
        </form>
      </div>
    </main>
  );
}

export default App;
