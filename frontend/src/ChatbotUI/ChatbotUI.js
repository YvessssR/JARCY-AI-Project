import React from 'react';
import styles from './ChatbotUI.module.css';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

export default function ChatbotUI() {
  return (
    <div className={styles.bg}>
      <div className={styles.centerCard}>
        <div className={styles.botIconWrap}>
          <FaRobot className={styles.botIcon} />
        </div>
        <h2 className={styles.title}>Welcome! How can I help you today?</h2>
        <div className={styles.messagesArea}>
          <div className={styles.messageBubble + ' ' + styles.botMessage}>
            This is where your messages will appear.
          </div>
        </div>
        <div className={styles.inputBar}>
          <input className={styles.input} placeholder="Type your message here... (Press / for quick commands)" />
          <button className={styles.sendBtn}><FaPaperPlane /></button>
        </div>
        <div className={styles.inputHint}>Press Enter to send · AI responses are generated in real-time</div>
      </div>
    </div>
  );
} 