export default function Card({ children, header }) {
  return (
    <div className="my-6 overflow-hidden rounded-lg bg-white shadow">
      {header && (      
        
      <div className="px-4 py-5 sm:px-6">
        {header}
      </div>
      ) }
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}
