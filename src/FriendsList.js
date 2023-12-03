import { Friend } from "./Friend";

export function FriendsList({ friends, onSelection, selectedFriend }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend
                    key={friend.id}
                    friend={friend}
                    selectedFriend={selectedFriend}
                    onSelection={onSelection} />
            ))}
        </ul>
    );
}
;
