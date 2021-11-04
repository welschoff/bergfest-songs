import React, { useState } from 'react';
import styles from './App.module.css';
import Registration from './components/Title/Registration/Registration';
import Songform from './components/Title/Songs/Songs';
import Title from './components/Title/Title';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);

  console.log(selectedUserName);

  let content;

  if (selectedUserName) {
    content = <Songform />;
  } else {
    content = <Registration onSelectUserName={setSelectedUserName} />;
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <Title
          text={selectedUserName ? `Hi ${selectedUserName}` : 'Bergfest'}
        />
        {content}
      </div>
    </main>
  );
}

export default App;
