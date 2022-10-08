import styled from 'styled-components';

export const SectionStatistics = styled.section`
  border: 1px solid #80808080;
  border-radius: 4px;
  width: 500px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  background-color: ${props => props.theme.colors.lightGrey};
  padding: 30px 0;
  margin: 0;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px;
  width: 100px;
  height: 100px;
  font-size: 30px;
 `;

export const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.05;
  color: ${props => props.theme.colors.grey};
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.25;
  color: ${props => props.theme.colors.black};;
`;
