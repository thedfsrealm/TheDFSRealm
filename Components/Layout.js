export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-600 text-white p-4 text-center font-bold">TR DFS WORLD</nav>
      <main>{children}</main>
    </div>
  );
}
