import styled from 'styled-components';

export const UserProfile = styled.div`
  padding-top: 8px;
  background-color: ${props => props.theme.colors.white};
  width: 300px;
  margin: 15px auto;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 10px 30px 4px;
`;

export const UserDescription = styled.div`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const UserImg = styled.img`
  width: calc(100% / 2);
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.25;
  color: ${props => props.theme.colors.black};
`;

export const UserTag = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.05;
  color: ${props => props.theme.colors.black};
  margin: 10px;
`;

export const UserLocation = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.05;
  color: ${props => props.theme.colors.grey};
  margin: 10px;
`;

export const UserList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.lightGrey};
  margin: 0;
  padding: 0;
`;

export const UserListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const UserLabel = styled.span`
  text-align: center;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.05;
  color: ${props => props.theme.colors.grey};
  margin-bottom: 10px;
`;

export const UserQuantity = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${props => props.theme.colors.black};
`;
