import { useState } from 'react';

export default function FloatingAssistant({ cardBg, borderColor, accentColor, textColor, textMuted }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about campus locations or facilities (e.g., library, canteen).' }
  ]);

  const campusKnowledge = [
    { keywords: ['library', 'book', 'reading'], answer: 'The central library is located in Block A, right next to the administrative building.' },
    { keywords: ['canteen', 'cafeteria', 'food', 'eat'], answer: 'The main canteen is situated near the student activity center and the sports ground.' },
    { keywords: ['cse', 'computer', 'tech'], answer: 'The Computer Science department is housed on the 2nd floor of the Tech Block.' },
    { keywords: ['hours', 'timing', 'open', 'close'], answer: 'The campus is open from 8:30 AM to 4:30 PM, Monday through Saturday.' }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = query.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setQuery('');

    const lowerQuery = userMsg.toLowerCase();
    let foundAnswer = "I'm not sure about that yet! Try asking about the library, canteen, or CSE department.";
    
    for (const item of campusKnowledge) {
      if (item.keywords.some(kw => lowerQuery.includes(kw))) {
        foundAnswer = item.answer;
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: foundAnswer }]);
    }, 400);
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 2147483647 }}>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: '65px',
            height: '65px',
            borderRadius: '50%',
            backgroundColor: accentColor || '#ff2d55',
            color: '#ffffff',
            border: `3px solid ${cardBg || '#ffffff'}`,
            boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px'
          }}
        >
          💬
        </button>
      ) : (
        <div style={{
          width: '360px',
          height: '480px',
          background: cardBg || '#121212',
          border: `1px solid ${borderColor || '#27272a'}`,
          borderRadius: '20px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${borderColor || '#27272a'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.05)' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: textColor || '#fff' }}>Campus Assistant</h4>
              <span style={{ fontSize: '11px', color: '#28a745', fontWeight: '600' }}>● Online</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: textColor || '#fff', fontSize: '20px', cursor: 'pointer', fontWeight: '700' }}
            >
              ×
            </button>
          </div>

          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: msg.sender === 'user' ? (accentColor || '#9b1c31') : (borderColor || '#27272a'),
                  color: '#fff',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  maxWidth: '80%',
                  fontSize: '13px',
                  lineHeight: '1.4'
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} style={{ padding: '12px', borderTop: `1px solid ${borderColor || '#27272a'}`, display: 'flex', gap: '8px' }}>
            <input 
              type="text" 
              placeholder="Ask a question..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', border: `1px solid ${borderColor || '#27272a'}`, background: 'transparent', color: textColor || '#fff', outline: 'none', fontSize: '13px' }}
            />
            <button 
              type="submit"
              style={{ background: accentColor || '#9b1c31', color: '#fff', border: 'none', padding: '10px 14px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '13px' }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
} // <--- Make sure it ends cleanly with just this brace
