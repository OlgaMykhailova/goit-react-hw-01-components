import propTypes from 'prop-types';
import { Item, Avatar, Name, Status } from './FriendList.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
  };
