import { Profile } from './profile/Profile';
import user from './profile/user.json';
import { Statistics } from './statistics/Statistics';
import statisticalData from './statistics/data.json';
import { FriendList } from './friendlist/FriendList';
import friends from './friendlist/friends.json';
import { TransactionHistory } from './transactionhistory/TransactionHistory';
import transactions from './transactionhistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatarURL={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
