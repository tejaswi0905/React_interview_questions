import Button from "./Button";

export default function AddFriend() {
  return (
    <div>
      <form className="form-add-friend">
        <label> Friend name</label>
        <input type="text"></input>

        <label> Image Url</label>
        <input type="text"></input>

        <Button>Add</Button>
      </form>
    </div>
  );
}
