import Button from "./Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button
        onClick={() => {
          onSelection(friend);
        }}
      >
        {selectedFriend && selectedFriend.id === friend.id ? "Close" : "Select"}
      </Button>
    </li>
  );
}
