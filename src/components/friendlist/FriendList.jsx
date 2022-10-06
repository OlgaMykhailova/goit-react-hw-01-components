import propTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';


export const FriendList = ({friends})=> {
  return (
    <ul className="friend-list">{friends.map(friend => <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id}/>)}</ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(propTypes.object),
};
