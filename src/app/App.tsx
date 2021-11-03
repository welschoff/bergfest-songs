import React from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <Title />
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
