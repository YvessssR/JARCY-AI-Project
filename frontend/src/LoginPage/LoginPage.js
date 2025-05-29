import React, { useState } from 'react';
import styles from './LoginPage.module.css';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    if (onLogin) onLogin();
  };

  return (
    <div className={styles.bg}>
      <div className={styles.centerCard}>
        <h2 className={styles.title}>JARCY</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="username"
            placeholder="Enter your email"
          />
          <label className={styles.label} htmlFor="password">Password</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            placeholder="Enter your password"
          />
          <button className={styles.loginBtn} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
} 