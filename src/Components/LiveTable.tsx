'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

type LiveMessage = {
  storeId: number;
  customersIn: number;
  customersOut: number;
  time: string;
};

export default function LiveTable() {
  const [messages, setMessages] = useState<LiveMessage[]>([]);

  useEffect(() => {
    // Fetch last 100 messages on interval
    const fetchMessages = async () => {
      try {
        const res = await axios.get<LiveMessage[]>('http://localhost:4000/api/live'); // You need to create this endpoint on backend
        setMessages(res.data);
        console.log(res.data)
      } catch (error) {
        console.error('Failed to fetch live messages', error);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 3000); // Poll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Table (Polling)</h2>
      <table>
        <thead>
          <tr>
            <th>Store ID</th>
            <th>Time</th>
            <th>Customers In</th>
            <th>Customers Out</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg, i) => (
            <tr key={i}>
              <td>{msg.storeId}</td>
              <td>{msg.time}</td>
              <td>{msg.customersIn}</td>
              <td>{msg.customersOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
