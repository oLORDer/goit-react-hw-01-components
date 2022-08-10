// components
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
// json
import user from '../dataBase/user';
import data from '../dataBase/data';
import friends from '../dataBase/friends';
import transactions from '../dataBase/transactions';

export default function App() {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList props={friends} />
      <TransactionHistory props={transactions} />
    </>
  );
}
