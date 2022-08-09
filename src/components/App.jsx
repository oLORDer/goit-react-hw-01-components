import Profile from './Profile';
import user from '../user';

import Statistics from './Statistics';
import data from '../data';

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
    </>
  );
}
