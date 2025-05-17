'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

type HistoryRow = {
  hour: string;
  in: number;
  out: number;
};

export default function HistoryTable() {
  const [data, setData] = useState<HistoryRow[]>([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/history')
      .then((res) => setData(res.data))
      .catch((err) => console.error('Failed to fetch history:', err));
  }, []);

  return (
    <div>
      <h2>History Table (Last 24h)</h2>
      <table>
        <thead>
          <tr>
            <th>Hour</th>
            <th>In</th>
            <th>Out</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.hour}</td>
              <td>{row.in}</td>
              <td>{row.out}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
