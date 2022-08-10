import s from './transactionHistory.module.css';

export default function TransactionHistory({ props }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {props.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <tr>
              <td className={s.type}>{type}</td>
              <td className={s.amount}>{amount}</td>
              <td className={s.currency}>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
