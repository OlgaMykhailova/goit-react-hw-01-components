import propTypes from 'prop-types';
import { UserProfile, UserDescription, UserImg, UserName, UserTag, UserLocation, UserList, UserListItem, UserLabel, UserQuantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatarURL, stats}) => {
  return (
    <UserProfile>
      <UserDescription>
        <UserImg src={avatarURL} alt="User avatar"/>
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserList>
        <UserListItem>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{stats.followers}</UserQuantity>
        </UserListItem>
        <UserListItem>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{stats.views}</UserQuantity>
        </UserListItem>
        <UserListItem>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{stats.likes}</UserQuantity>
          </UserListItem>
      </UserList>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatarURL: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number).isRequired,
};
