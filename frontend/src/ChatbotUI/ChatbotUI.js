import React from 'react';
import styles from './ChatbotUI.module.css';
import { FaRobot, FaMicrophone, FaPaperPlane } from 'react-icons/fa';

export default function ChatbotUI() {
  return (
    <div className={styles.bg}>
      <div className={styles.centerCard}>
        <div className={styles.botIconWrap}>
          <FaRobot className={styles.botIcon} />
        </div>
        <h2 className={styles.title}>Welcome! How can I help you today?</h2>
        <div className={styles.inputBar}>
          <FaMicrophone className={styles.inputIcon} />
          <input className={styles.input} placeholder="Type your message here... (Press / for quick commands)" />
          <button className={styles.sendBtn}><FaPaperPlane /></button>
        </div>
        <div className={styles.inputHint}>Press Enter to send · AI responses are generated in real-time</div>
      </div>
    </div>
  );
} 