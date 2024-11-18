export default function Button({ value, onClick }) {
  return (
    <button onClick={onClick} disabled={value !== null}>
      <div className="button">{value}</div>
    </button>
  );
}
