import "./App.css";
import AddFriend from "./components/FormAddFriend";
import FriendsList from "./components/FriendsList";
import { useState } from "react";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, SetFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const [selectedFriend, SetSelectedFriend] = useState(null);

  const handleAddFriend = () => {
    setShowAddFriend((value) => {
      return !value;
    });
  };

  const handleSelection = (friend) => {
    if (!selectedFriend || selectedFriend.id !== friend.id) {
      SetSelectedFriend(friend);
    } else if (selectedFriend.id === friend.id) {
      SetSelectedFriend(null);
    }
  };

  //Before changing the stae of selectedFriend, we have the current selected friend, since when we click the select button we are calling the handleSelection function.

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <AddFriend />}
        <Button onClick={handleAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill friend={selectedFriend} />}
    </div>
  );
}

export default App;
