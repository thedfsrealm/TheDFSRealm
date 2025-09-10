import Layout from '../components/Layout';
import Ticker from '../components/Ticker';
import SpiritVerse from '../components/SpiritVerse';

export default function Home() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center">🕊️ TR DFS Realm</h1>
        <SpiritVerse />
        <Ticker />
      </div>
    </Layout>
  );
}
