export default function Card({ children }) {
  return (
    <div className="my-6 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}
