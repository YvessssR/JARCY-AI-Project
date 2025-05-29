import React, { useState } from 'react';
import styles from './ChatbotUI.module.css';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

export default function ChatbotUI() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'This is where your messages will appear.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages((msgs) => [
      ...msgs.filter((m, i) => i !== 0 || m.sender !== 'bot'), // remove placeholder if first
      userMsg
    ]);
    setInput('');
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { sender: 'bot', text: 'AI reply to: ' + input }
      ]);
    }, 600);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.centerCard}>
        <div className={styles.botIconWrap}>
          <FaRobot className={styles.botIcon} />
        </div>
        <h2 className={styles.title}>Welcome! How can I help you today?</h2>
        <div className={styles.messagesArea}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={
                styles.messageBubble + ' ' +
                (msg.sender === 'user' ? styles.userMessage : styles.botMessage)
              }
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form className={styles.inputBar} onSubmit={handleSend}>
          <input
            className={styles.input}
            placeholder="Type your message here..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className={styles.sendBtn} type="submit"><FaPaperPlane /></button>
        </form>
        <div className={styles.inputHint}>Press Enter to send · AI responses are generated in real-time</div>
      </div>
    </div>
  );
}