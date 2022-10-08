import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 500px;
  margin: 15px auto;
`;

export const THead = styled.th`
  text-transform: uppercase;
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
`;

export const TData = styled.td`
  text-align: center;
  &::first-letter {
    text-transform: uppercase;
  }
  border: 1px solid #ddd;
  padding: 8px;
  initial-letter: 300px;
`;

export const TRow = styled.tr`
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.lightGrey};
  }
  &:hover {
    background-color: ${props => props.theme.colors.darkGrey};
  }
`;
