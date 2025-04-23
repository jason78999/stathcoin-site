export function Button({ children, className }) {
  return (
    <button className={`bg-white text-black px-4 py-2 rounded ${className}`}>
      {children}
    </button>
  );
}
