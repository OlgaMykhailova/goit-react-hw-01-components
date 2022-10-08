import propTypes from 'prop-types';
import { Table, THead, TData, TRow } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <THead>Type</THead>
          <THead>Amount</THead>
          <THead>Currency</THead>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TRow key={item.id}>
            <TData>{item.type}</TData>
            <TData>{item.amount}</TData>
            <TData>{item.currency}</TData>
          </TRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ),
};
