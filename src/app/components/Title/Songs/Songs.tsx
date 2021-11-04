import React, { useState } from 'react';
import styles from './Songs.module.css';

function Songform(): JSX.Element {
  const [songtitle, setSongtitle] = useState('');
  const [interpret, setInterpret] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    fetch('https://json-server.machens.dev/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        artist: interpret,
        title: songtitle,
      }),
    });
  }

  function handleInterpretChange(event: ChangeEvent<HTMLInputElement>) {
    setInterpret(event.target.value);
  }

  function handleSongtitleChange(event: ChangeEvent<HTMLInputElement>) {
    setSongtitle(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add a Song</h2>
      <input
        type="text"
        value={interpret}
        placeholder="Interpret"
        onChange={handleInterpretChange}
      />
      <input
        type="text"
        value={songtitle}
        placeholder="Songtitle"
        onChange={handleSongtitleChange}
      />
      <input type="submit" />
    </form>
  );
}

export default Songform;
