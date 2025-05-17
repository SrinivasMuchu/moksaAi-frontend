import LiveTable from '../Components/LiveTable';
import HistoryTable from '../Components/HourTable';

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>🛒 Customer Dashboard</h1>
      <LiveTable />
      <hr />
      <HistoryTable />
    </main>
  );
}
