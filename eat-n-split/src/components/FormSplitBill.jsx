import Button from "./Button";

export default function FormSplitBill({ friend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friend.name}</h2>

      <label>Bill value</label>
      <input type="text" />

      <label>Your expense</label>
      <input type="text" />

      <label> {friend.name}s expense</label>
      <input type="text" disabled />

      <label>Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
