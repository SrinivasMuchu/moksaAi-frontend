import { useEffect, useState } from 'react';

export const useWebSocket = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:4000');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [message, ...prev.slice(0, 99)]);
    };

    return () => ws.close();
  }, []);

  return messages;
};
